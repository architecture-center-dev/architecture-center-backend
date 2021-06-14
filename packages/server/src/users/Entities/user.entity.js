"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var graphql_1 = require("@nestjs/graphql");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.ObjectIdColumn(),
        graphql_1.Field(function (type) { return String; })
    ], User.prototype, "id");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "name");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "lastname");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], User.prototype, "firstAccess");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], User.prototype, "password");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], User.prototype, "image");
    User = __decorate([
        typeorm_1.Entity({ name: 'users' }),
        graphql_1.ObjectType()
    ], User);
    return User;
}());
exports.User = User;
