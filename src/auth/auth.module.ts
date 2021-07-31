import { Module } from '@nestjs/common';
import { AuthService } from './domain/services/auth.service';
import { LocalStrategy } from './domain/strategies/local.strategy';
import { JwtStrategy } from './domain/strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './application/adapters/rest/auth.controller';
import {AuthResolver} from './application/adapters/graphql/resolvers/auth.resolver'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})

export class AuthModule {}
