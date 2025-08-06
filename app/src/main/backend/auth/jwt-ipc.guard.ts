import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class JwtIpcGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.get<boolean>(
            IS_PUBLIC_KEY,
            context.getHandler(),
        );
        if (isPublic) return true;

        const ctx = context.switchToRpc();
        const data = ctx.getData();
        const authToken = data?.authToken;

        if (!authToken) {
            throw new UnauthorizedException('Token missing in payload');
        }

        try {
            const payload = await this.jwtService.verifyAsync(jwtToken);
            ctx.getContext().args[0].user = payload;
            return true;
        } catch {
            throw new UnauthorizedException('Invalid token');
        }
    }
}