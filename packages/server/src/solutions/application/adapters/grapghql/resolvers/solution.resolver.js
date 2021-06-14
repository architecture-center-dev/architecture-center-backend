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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var graphql_1 = require("@nestjs/graphql");
var common_1 = require("@nestjs/common");
var gql_auth_guard_1 = require("../../../../../auth/guards/gql.auth.guard");
var solution_entity_1 = require("../../../../domain/entities/solution.entity");
var mongodb_1 = require("mongodb");
var AWSS3Uploader_1 = require("../../../../infrastructure/persistence/s3/AWSS3Uploader");
var graphql_tools_1 = require("graphql-tools");
var attachment_entity_1 = require("../../../../domain/entities/attachment.entity");
var attachment_service_1 = require("../../../../domain/services/attachment.service");
var SolutionResolver = /** @class */ (function () {
    function SolutionResolver(solutionService, attachmentService) {
        this.solutionService = solutionService;
        this.attachmentService = attachmentService;
    }
    SolutionResolver.prototype.solution = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var solutions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.solutionService.findAll(search)];
                    case 1:
                        solutions = _a.sent();
                        return [2 /*return*/, solutions];
                }
            });
        });
    };
    SolutionResolver.prototype.solutionById = function (solution_id) {
        return __awaiter(this, void 0, void 0, function () {
            var solution;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.solutionService.findOne({ where: { _id: new mongodb_1.ObjectId(solution_id) } })];
                    case 1:
                        solution = _a.sent();
                        return [2 /*return*/, solution];
                }
            });
        });
    };
    SolutionResolver.prototype.createTagSolution = function (solution_id, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.solutionService.createTag(solution_id, tag)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    SolutionResolver.prototype.createTeamMemberSolution = function (solution_id, team_member) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.solutionService.createTeamMember(solution_id, team_member)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    SolutionResolver.prototype.singleFileUpload = function (file, solution_id) {
        return __awaiter(this, void 0, void 0, function () {
            var s3Uploader, attachment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s3Uploader = new AWSS3Uploader_1.AWSS3Uploader({
                            accessKeyId: process.env.AWS_ACCESS_KEY,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                            destinationBucketName: 'architecture-center',
                            region: "us-east-1"
                        });
                        return [4 /*yield*/, this.attachmentService.saveAttachment(solution_id, file, s3Uploader)];
                    case 1:
                        attachment = _a.sent();
                        return [2 /*return*/, attachment];
                }
            });
        });
    };
    __decorate([
        common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
        graphql_1.Query(function (returns) { return [solution_entity_1.Solution]; }),
        __param(0, graphql_1.Args({ name: 'search', nullable: true }))
    ], SolutionResolver.prototype, "solution");
    __decorate([
        common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
        graphql_1.Query(function (returns) { return solution_entity_1.Solution; }, { nullable: true }),
        __param(0, graphql_1.Args({ name: 'solution_id' }))
    ], SolutionResolver.prototype, "solutionById");
    __decorate([
        common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
        graphql_1.Mutation(function (returns) { return solution_entity_1.Solution; }),
        __param(0, graphql_1.Args({ name: 'solution_id' })),
        __param(1, graphql_1.Args({ name: 'tag' }))
    ], SolutionResolver.prototype, "createTagSolution");
    __decorate([
        common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
        graphql_1.Mutation(function (returns) { return solution_entity_1.Solution; }),
        __param(0, graphql_1.Args({ name: 'solution_id' })),
        __param(1, graphql_1.Args({ name: 'team_member' }))
    ], SolutionResolver.prototype, "createTeamMemberSolution");
    __decorate([
        common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
        graphql_1.Mutation(function () { return attachment_entity_1.Attachment; }, { nullable: true }),
        __param(0, graphql_1.Args({ name: 'file', type: function () { return graphql_tools_1.GraphQLUpload; } })),
        __param(1, graphql_1.Args({ name: 'solution_id' }))
    ], SolutionResolver.prototype, "singleFileUpload");
    SolutionResolver = __decorate([
        graphql_1.Resolver('Solutions')
    ], SolutionResolver);
    return SolutionResolver;
}());
exports.SolutionResolver = SolutionResolver;
