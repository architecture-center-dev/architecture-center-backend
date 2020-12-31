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
const user_entity_1 = require("../../users/Entities/user.entity");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../guards/gql.auth.guard");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const oauth_token_type_1 = require("../../users/Entities/oauth-token.type");
const auth_service_1 = require("../services/auth.service");
let UserResolver = class UserResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async users(user) {
        console.log(user);
        return [];
    }
    async login(username, password) {
        const user = { username, password };
        return this.authService.login(user);
    }
};
__decorate([
    common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(returns => [user_entity_1.User]),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    graphql_1.Mutation(returns => oauth_token_type_1.OauthTOken),
    __param(0, graphql_1.Args({ name: 'username' })),
    __param(1, graphql_1.Args({ name: 'password' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    graphql_1.Resolver('Users'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map