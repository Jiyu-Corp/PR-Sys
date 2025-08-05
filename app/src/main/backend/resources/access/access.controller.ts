import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { AccessService } from './access.service';
import { IpcHandle } from '@doubleshot/nest-electron';
import { from, Observable, of } from 'rxjs';
import { Access } from './entities/access.entity';
import { LoginDto } from './dto/login-dto';
import { JWTTokenDto } from './dto/jwt-token-dto';
import { ChangePasswordDto } from './dto/change-password-dto';

@Controller()
export class AccessController {
    constructor(private readonly accessService: AccessService) {}

    @IpcHandle('access/getDefault')
    getDefault(): Observable<Access> {
        return from(this.accessService.getDefault());
    }

    @IpcHandle('access/forgotPassword')
    forgotPassword(@Payload() idAccess: number): Observable<boolean> {
        return from(this.accessService.forgotPassword(idAccess));
    }

    @IpcHandle('access/login')
    login(@Payload() loginDto: LoginDto): Observable<JWTTokenDto> {
        return of(this.accessService.login(loginDto));
    }

    @IpcHandle('access/logout')
    logout(@Payload() jwtToken: string): Observable<boolean> {
        return of(this.accessService.logout(jwtToken));
    }

    @IpcHandle('access/changePassword')
    changePassword(@Payload() changePasswordDto: ChangePasswordDto): Observable<JWTTokenDto> {
        return of(this.accessService.changePassword(changePasswordDto));
    }
}
