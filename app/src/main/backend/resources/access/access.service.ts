import { Injectable } from '@nestjs/common';
import { Access } from './entities/access.entity';
import { LoginDto } from './dto/login-dto';
import { ChangePasswordDto } from './dto/change-password-dto';
import { JWTTokenDto } from './dto/jwt-token-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailService } from '../../mail/mail.service';
import { randomBytes } from 'crypto';
import { EncryptionService } from '@main/backend/encryption/encryption.service';

@Injectable()
export class AccessService {
    constructor(
        @InjectRepository(Access)
        private readonly acessRepo: Repository<Access>,
        private readonly mailService: MailService,
        private readonly encryptService: EncryptionService
    ) {}

    async getDefault(): Promise<Access> {
        const firstCreatedAccess = await this.acessRepo
            .findOne({
                order: {
                    idAccess: "ASC"
                }
            });

        return firstCreatedAccess;
    }

    generateSimplePassword(size: number = 12) {
        const buf = randomBytes(size);
        return buf.toString('base64url').slice(0, size);
    }

    async forgotPassword(idAccess: number): Promise<boolean> {
        const access = await this.acessRepo
            .findOne({
                where: { idAccess: idAccess }
            });

        const newPassword = this.generateSimplePassword();
        const newPasswordEncrypted = this.encryptService.encrypt(newPassword);

        try {
            access.password = newPasswordEncrypted;
            await this.acessRepo.save(access);

            await this.mailService.sendResetPassword(
                access.email,
                access.username,
                newPassword
            );

            return true;
        } catch (err) {
            return false;
        }
    }

    login(loginDto: LoginDto): JWTTokenDto {

    }

    logout(jwtToken: string): boolean {

    }

    changePassword(changePasswordDto: ChangePasswordDto): JWTTokenDto {

    }
}
