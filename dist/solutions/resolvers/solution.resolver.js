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
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../../auth/guards/gql.auth.guard");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
const solutions_service_1 = require("../solutions.service");
const solution_entity_1 = require("../entities/solution.entity");
let SolutionResolver = class SolutionResolver {
    constructor(solutionService) {
        this.solutionService = solutionService;
    }
    async solution(search) {
        const solutions = await this.solutionService.findAll(search);
        return solutions;
    }
};
__decorate([
    graphql_1.Query(returns => [solution_entity_1.Solution]),
    __param(0, graphql_1.Args({ name: 'search', nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SolutionResolver.prototype, "solution", null);
SolutionResolver = __decorate([
    graphql_1.Resolver('Solutions'),
    __metadata("design:paramtypes", [solutions_service_1.SolutionsService])
], SolutionResolver);
exports.SolutionResolver = SolutionResolver;
//# sourceMappingURL=solution.resolver.js.map