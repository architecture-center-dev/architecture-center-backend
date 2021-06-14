"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var solutions_service_1 = require("./domain/services/solutions.service");
var solutions_controller_1 = require("./application/adapters/rest/solutions.controller");
var typeorm_1 = require("@nestjs/typeorm");
var solution_entity_1 = require("./domain/entities/solution.entity");
var solution_resolver_1 = require("./application/adapters/grapghql/resolvers/solution.resolver");
var canvas_resolver_1 = require("./application/adapters/grapghql/resolvers/canvas.resolver");
var attachment_service_1 = require("./domain/services/attachment.service");
var attachment_entity_1 = require("./domain/entities/attachment.entity");
var canvas_service_1 = require("./domain/services/canvas.service");
var canvas_entity_1 = require("./domain/entities/canvas.entity");
var SolutionsModule = /** @class */ (function () {
    function SolutionsModule() {
    }
    SolutionsModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([solution_entity_1.Solution, attachment_entity_1.Attachment, canvas_entity_1.Canvas]),
            ],
            controllers: [solutions_controller_1.SolutionsController],
            providers: [solutions_service_1.SolutionsService, solution_resolver_1.SolutionResolver, attachment_service_1.AttachmentService, canvas_service_1.CanvasService, canvas_resolver_1.CanvasResolver]
        })
    ], SolutionsModule);
    return SolutionsModule;
}());
exports.SolutionsModule = SolutionsModule;
