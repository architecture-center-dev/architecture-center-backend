import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller"
import { UserService } from "../services/user.service"
import { User } from '../Entities/user.entity';

describe("UsersController", () => {
   let userController: UsersController;

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         providers: [
            UsersController,
            {
               provide: UserService,
               useValue: {
                  findAll : () => [new User()]
               }
            }
         ],

      }).compile();

      userController = module.get<UsersController>(UsersController);
   });

   it('call getUsers shoul be return a list of users', async () => {
      const users: User[] = await userController.getUsers()

      expect(users).toEqual([new User()]);
   });

});
