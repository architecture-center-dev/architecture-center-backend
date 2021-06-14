"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./Entities/user.entity");
var users_controller_1 = require("./controllers/users.controller");
var user_service_1 = require("./services/user.service");
var user_resolver_1 = require("./resolvers/user.resolver");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            ],
            providers: [user_resolver_1.UserResolver, user_service_1.UserService],
            controllers: [users_controller_1.UsersController],
            exports: [user_service_1.UserService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
