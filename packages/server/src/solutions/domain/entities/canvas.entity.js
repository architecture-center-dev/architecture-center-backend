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
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    __decorate([
        typeorm_1.ObjectIdColumn(),
        graphql_1.Field(function (type) { return String; })
    ], Canvas.prototype, "canvas_id");
    __decorate([
        graphql_1.Field(function (type) { return String; }),
        typeorm_1.Column()
    ], Canvas.prototype, "solution_id");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "dependencies");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "technology");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "patterns");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "problem");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "func_requirement");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "non_func_requirement");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "context");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "difficulties");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true }),
        typeorm_1.Column({ array: true, nullable: true })
    ], Canvas.prototype, "advantages");
    __decorate([
        graphql_1.Field(function (type) { return Date; }),
        typeorm_1.CreateDateColumn()
    ], Canvas.prototype, "created_at");
    __decorate([
        graphql_1.Field(function (type) { return Date; }),
        typeorm_1.UpdateDateColumn()
    ], Canvas.prototype, "updated_at");
    Canvas = __decorate([
        typeorm_1.Entity({ name: 'canvas' }),
        graphql_1.ObjectType()
    ], Canvas);
    return Canvas;
}());
exports.Canvas = Canvas;
