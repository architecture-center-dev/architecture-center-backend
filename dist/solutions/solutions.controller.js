"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const solutions_service_1 = require("./solutions.service");
const create_solution_dto_1 = require("./dto/create-solution.dto");
const update_solution_dto_1 = require("./dto/update-solution.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let SolutionsController = class SolutionsController {
    constructor(solutionsService) {
        this.solutionsService = solutionsService;
    }
    create(createSolutionDto) {
        return this.solutionsService.create(createSolutionDto);
    }
    findAll(query) {
        return this.solutionsService.findAll(query.search);
    }
    findOne(id) {
        return this.solutionsService.findOne({ where: { _id: id } });
    }
    update(id, updateSolutionDto) {
        return this.solutionsService.update(+id, updateSolutionDto);
    }
    remove(id) {
        return this.solutionsService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solution_dto_1.CreateSolutionDto]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_solution_dto_1.UpdateSolutionDto]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "remove", null);
SolutionsController = __decorate([
    common_1.Controller('solutions'),
    __metadata("design:paramtypes", [solutions_service_1.SolutionsService])
], SolutionsController);
exports.SolutionsController = SolutionsController;
//# sourceMappingURL=solutions.controller.js.map