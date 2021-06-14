"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var create_solution_dto_1 = require("../../../domain/dto/create-solution.dto");
var jwt_auth_guard_1 = require("../../../../auth/guards/jwt-auth.guard");
var swagger_1 = require("@nestjs/swagger");
var solution_entity_1 = require("../../../domain/entities/solution.entity");
var SolutionsController = /** @class */ (function () {
    function SolutionsController(solutionsService) {
        this.solutionsService = solutionsService;
    }
    SolutionsController.prototype.create = function (createSolutionDto) {
        return this.solutionsService.create(createSolutionDto);
    };
    SolutionsController.prototype.createTags = function (solution_id, updateSolutionDto) {
        return this.solutionsService.createTag(solution_id, updateSolutionDto.tags);
    };
    SolutionsController.prototype.createTeamMember = function (solution_id, request) {
        return this.solutionsService.createTeamMember(solution_id, request.team_member);
    };
    SolutionsController.prototype.findAll = function (query) {
        return this.solutionsService.findAll(query.search);
    };
    SolutionsController.prototype.findOne = function (id) {
        return this.solutionsService.findOne({ where: { _id: id } });
    };
    SolutionsController.prototype.update = function (id, updateSolutionDto) {
        return this.solutionsService.update(+id, updateSolutionDto);
    };
    SolutionsController.prototype.remove = function (id) {
        return this.solutionsService.remove(+id);
    };
    SolutionsController.prototype.uploadBigPicture = function (solution_id, request) {
        return this.solutionsService.createTeamMember(solution_id, request.team_member);
    };
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post(),
        swagger_1.ApiCreatedResponse({
            type: create_solution_dto_1.CreateSolutionDto,
            description: "Solution was created successfull."
        }),
        swagger_1.ApiUnauthorizedResponse(),
        __param(0, common_1.Body())
    ], SolutionsController.prototype, "create");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post('/:solution_id/tags'),
        __param(0, common_1.Param('solution_id')), __param(1, common_1.Body())
    ], SolutionsController.prototype, "createTags");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post('/:solution_id/team-members'),
        __param(0, common_1.Param('solution_id')), __param(1, common_1.Body())
    ], SolutionsController.prototype, "createTeamMember");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Get(),
        swagger_1.ApiOkResponse({ type: [solution_entity_1.Solution] }),
        swagger_1.ApiOperation({ description: "List all solutions", summary: "List all solutions" }),
        __param(0, common_1.Query())
    ], SolutionsController.prototype, "findAll");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], SolutionsController.prototype, "findOne");
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], SolutionsController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], SolutionsController.prototype, "remove");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post('/:solution_id/big-picture'),
        __param(0, common_1.Param('solution_id')), __param(1, common_1.Body())
    ], SolutionsController.prototype, "uploadBigPicture");
    SolutionsController = __decorate([
        swagger_1.ApiTags("Solutions"),
        common_1.Controller('solutions')
    ], SolutionsController);
    return SolutionsController;
}());
exports.SolutionsController = SolutionsController;
