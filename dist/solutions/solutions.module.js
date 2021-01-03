"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const solutions_service_1 = require("./domain/services/solutions.service");
const solutions_controller_1 = require("./application/adapters/rest/solutions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const solution_entity_1 = require("./domain/entities/solution.entity");
const solution_resolver_1 = require("./application/adapters/grapghql/resolvers/solution.resolver");
const attachment_service_1 = require("./domain/services/attachment.service");
const attachment_entity_1 = require("./domain/entities/attachment.entity");
let SolutionsModule = class SolutionsModule {
};
SolutionsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([solution_entity_1.Solution, attachment_entity_1.Attachment]),
        ],
        controllers: [solutions_controller_1.SolutionsController],
        providers: [solutions_service_1.SolutionsService, solution_resolver_1.SolutionResolver, attachment_service_1.AttachmentService]
    })
], SolutionsModule);
exports.SolutionsModule = SolutionsModule;
//# sourceMappingURL=solutions.module.js.map