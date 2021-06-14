"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var graphql_1 = require("@nestjs/graphql");
var CreateCanvasDto = /** @class */ (function () {
    function CreateCanvasDto() {
    }
    __decorate([
        graphql_1.Field()
    ], CreateCanvasDto.prototype, "solution_id");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "dependencies");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "technology");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "patterns");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "problem");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "func_requirement");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "non_func_requirement");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "context");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "difficulties");
    __decorate([
        graphql_1.Field(function (type) { return [String]; }, { nullable: true })
    ], CreateCanvasDto.prototype, "advantages");
    CreateCanvasDto = __decorate([
        graphql_1.InputType()
    ], CreateCanvasDto);
    return CreateCanvasDto;
}());
exports.CreateCanvasDto = CreateCanvasDto;
