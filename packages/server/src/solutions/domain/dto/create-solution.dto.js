"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var swagger_1 = require("@nestjs/swagger");
var CreateSolutionDto = /** @class */ (function () {
    function CreateSolutionDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ description: "Name of solution" })
    ], CreateSolutionDto.prototype, "name");
    __decorate([
        swagger_1.ApiProperty({ description: "Name of customer where solution was deployed" })
    ], CreateSolutionDto.prototype, "customer");
    __decorate([
        swagger_1.ApiProperty({ description: "Name of project where solution was deployed" })
    ], CreateSolutionDto.prototype, "project");
    __decorate([
        swagger_1.ApiProperty({ description: "Vertical market of the solution" })
    ], CreateSolutionDto.prototype, "market");
    __decorate([
        swagger_1.ApiProperty({ description: "Year and month when the solution was deployed" })
    ], CreateSolutionDto.prototype, "year_month");
    __decorate([
        swagger_1.ApiProperty({ description: "Short description about what is the solution" })
    ], CreateSolutionDto.prototype, "description");
    __decorate([
        swagger_1.ApiProperty({ description: "Tags ro search contents easier" })
    ], CreateSolutionDto.prototype, "tags");
    __decorate([
        swagger_1.ApiProperty({ description: "Big picture diagram of the project" })
    ], CreateSolutionDto.prototype, "big_picture");
    __decorate([
        swagger_1.ApiProperty({ description: "Team members of the solution when it was created" })
    ], CreateSolutionDto.prototype, "team_members");
    return CreateSolutionDto;
}());
exports.CreateSolutionDto = CreateSolutionDto;
