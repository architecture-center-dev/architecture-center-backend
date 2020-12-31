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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const solution_entity_1 = require("./entities/solution.entity");
const mongodb_1 = require("mongodb");
let SolutionsService = class SolutionsService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(createSolutionDto) {
        return this.userRepository.save(createSolutionDto);
    }
    findAll(filter) {
        const query = (filter != null && filter != "") ?
            {
                where: {
                    $or: [
                        { tags: { $in: [filter] } },
                        { name: { $in: [filter] } }
                    ]
                }
            } : {};
        return this.userRepository.find(query);
    }
    findOne(where) {
        return this.userRepository.findOne(where);
    }
    update(id, updateSolutionDto) {
        return `This action updates a #${id} solution`;
    }
    remove(id) {
        return `This action removes a #${id} solution`;
    }
    async createTag(solution_id, tag) {
        const solutionRepository = typeorm_2.getRepository(solution_entity_1.Solution);
        const solution = await solutionRepository.findOne(new mongodb_1.ObjectID(solution_id));
        if (!solution.tags.includes(tag)) {
            solution.tags.push(tag);
        }
        const result = await solutionRepository.save(solution);
        return result;
    }
};
SolutionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(solution_entity_1.Solution)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SolutionsService);
exports.SolutionsService = SolutionsService;
//# sourceMappingURL=solutions.service.js.map