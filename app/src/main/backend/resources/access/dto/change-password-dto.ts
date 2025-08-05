import { LoginDto } from "./login-dto";
import { PartialType } from '@nestjs/mapped-types';

export class ChangePasswordDto extends PartialType(LoginDto) {
    readonly newPassword: string;
}