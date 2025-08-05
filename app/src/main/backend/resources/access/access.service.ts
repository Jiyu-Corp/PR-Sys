import { Injectable } from '@nestjs/common';
import { Access } from './entities/access.entity';
import { LoginDto } from './dto/login-dto';
import { ChangePasswordDto } from './dto/change-password-dto';
import { JWTTokenDto } from './dto/jwt-token-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccessService {
    constructor(
        @InjectRepository(Access)
        private readonly acessRepo: Repository<Access>
    ) {}

    async getDefault(): Promise<Access> {
        let firstCreatedAccess = await this.acessRepo
            .findOne({
                order: {
                    idAccess: "ASC"
                }
            });

        return firstCreatedAccess;
    }

    forgotPassword(idAccess: number): boolean {
        // get access
        // generate random password
        // send email
        // on sucess, update access password

    }

    login(loginDto: LoginDto): JWTTokenDto {

    }

    logout(jwtToken: string): boolean {

    }

    changePassword(changePasswordDto: ChangePasswordDto): JWTTokenDto {

    }
}
