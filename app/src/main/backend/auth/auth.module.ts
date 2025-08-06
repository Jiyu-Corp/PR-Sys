// src/auth/auth.module.ts

import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtIpcGuard } from './jwt-ipc.guard';
import { APP_GUARD } from '@nestjs/core';

@Global()
@Module({
  providers: [
    AuthService,
    JwtIpcGuard,
    {
      provide: APP_GUARD,
      useClass: JwtIpcGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
