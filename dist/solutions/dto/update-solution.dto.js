"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapped_types_1 = require("@nestjs/mapped-types");
const create_solution_dto_1 = require("./create-solution.dto");
class UpdateSolutionDto extends mapped_types_1.PartialType(create_solution_dto_1.CreateSolutionDto) {
}
exports.UpdateSolutionDto = UpdateSolutionDto;
//# sourceMappingURL=update-solution.dto.js.map