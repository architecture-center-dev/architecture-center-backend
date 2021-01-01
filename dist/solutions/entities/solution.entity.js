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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let Solution = class Solution {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    graphql_1.Field(type => String),
    __metadata("design:type", typeorm_1.ObjectID)
], Solution.prototype, "solution_id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "customer", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "project", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "market", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "year_month", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "description", void 0);
__decorate([
    graphql_1.Field(type => String, { nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solution.prototype, "big_picture", void 0);
__decorate([
    graphql_1.Field(type => [String], { nullable: true }),
    typeorm_1.Column({ array: true, nullable: true }),
    __metadata("design:type", String)
], Solution.prototype, "tags", void 0);
__decorate([
    graphql_1.Field(type => [String], { nullable: true }),
    typeorm_1.Column({ array: true, nullable: true }),
    __metadata("design:type", String)
], Solution.prototype, "team_members", void 0);
__decorate([
    graphql_1.Field(type => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Solution.prototype, "created_at", void 0);
__decorate([
    graphql_1.Field(type => Date),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Solution.prototype, "updated_at", void 0);
Solution = __decorate([
    typeorm_1.Entity({ name: 'solutions' }),
    graphql_1.ObjectType()
], Solution);
exports.Solution = Solution;
//# sourceMappingURL=solution.entity.js.map