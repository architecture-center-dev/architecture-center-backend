"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
var UsersController = /** @class */ (function () {
    function UsersController(userService) {
        this.userService = userService;
    }
    UsersController.prototype.getUsers = function () {
        return this.userService.findAll();
    };
    __decorate([
        common_1.Get()
    ], UsersController.prototype, "getUsers");
    UsersController = __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Controller('/users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
