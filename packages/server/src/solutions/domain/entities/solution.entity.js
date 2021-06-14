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
var swagger_1 = require("@nestjs/swagger");
var Solution = /** @class */ (function () {
    function Solution() {
    }
    __decorate([
        typeorm_1.ObjectIdColumn(),
        graphql_1.Field(function (type) { return String; }),
        swagger_1.ApiProperty({ type: String })
    ], Solution.prototype, "solution_id");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(),
        typeorm_1.Column()
    ], Solution.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(),
        typeorm_1.Column()
    ], Solution.prototype, "customer");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(),
        typeorm_1.Column()
    ], Solution.prototype, "project");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(),
        typeorm_1.Column()
    ], Solution.prototype, "market");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(),
        typeorm_1.Column()
    ], Solution.prototype, "year_month");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(),
        typeorm_1.Column()
    ], Solution.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(function (type) { return String; }, { nullable: true }),
        typeorm_1.Column()
    ], Solution.prototype, "big_picture");
    __decorate([
        swagger_1.ApiProperty({ type: [String] }),
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Solution.prototype, "tags");
    __decorate([
        swagger_1.ApiProperty({ type: [String] }),
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Solution.prototype, "team_members");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(function (type) { return Date; }),
        typeorm_1.CreateDateColumn()
    ], Solution.prototype, "created_at");
    __decorate([
        swagger_1.ApiProperty(),
        graphql_1.Field(function (type) { return Date; }),
        typeorm_1.UpdateDateColumn()
    ], Solution.prototype, "updated_at");
    Solution = __decorate([
        typeorm_1.Entity({ name: 'solutions' }),
        graphql_1.ObjectType()
    ], Solution);
    return Solution;
}());
exports.Solution = Solution;
