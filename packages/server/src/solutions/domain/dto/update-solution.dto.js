"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_solution_dto_1 = require("./create-solution.dto");
var UpdateSolutionDto = /** @class */ (function (_super) {
    __extends(UpdateSolutionDto, _super);
    function UpdateSolutionDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateSolutionDto;
}(mapped_types_1.PartialType(create_solution_dto_1.CreateSolutionDto)));
exports.UpdateSolutionDto = UpdateSolutionDto;
