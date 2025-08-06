import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { AccessService } from './access.service';
import { IpcHandle } from '@doubleshot/nest-electron';
import { from, Observable, of } from 'rxjs';
import { LoginDto } from './dto/login-dto';
import { AuthTokenDto } from './dto/auth-token-dto';
import { ChangePasswordDto } from './dto/change-password-dto';
import { Public } from '@main/backend/decorators/public.decorator';

@Controller()
export class AccessController {
    constructor(private readonly accessService: AccessService) {}

    @Public()
    @IpcHandle('access/getDefault')
    getDefaultUsername(): Observable<string> {
        return from(this.accessService.getDefault(true) as Promise<string>);
    }

    @Public()
    @IpcHandle('access/forgotPassword')
    forgotPassword(@Payload() idAccess: number): Observable<boolean> {
        return from(this.accessService.forgotPassword(idAccess));
    }

    @Public()
    @IpcHandle('access/login')
    login(@Payload() loginDto: LoginDto): Observable<AuthTokenDto> {
        return from(this.accessService.login(loginDto));
    }

    @IpcHandle('access/changePassword')
    changePassword(@Payload() changePasswordDto: ChangePasswordDto): Observable<AuthTokenDto> {
        return from(this.accessService.changePassword(changePasswordDto));
    }
}
