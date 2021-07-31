import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/Entities/user.entity';
import { UserService } from './domain/services/user.service';
import { UserResolver } from './application/adapters/graphql/resolvers/user.resolver';
import { UsersController } from './application/adapters/rest/users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserResolver, UserService],
  controllers: [UsersController],
  exports: [UserService]
})
export class UsersModule {}
