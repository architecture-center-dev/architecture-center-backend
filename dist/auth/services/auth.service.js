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
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../../users/services/user.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(username, pass) {
        const user = await this.usersService.findUserByAndPassword(username, pass);
        if (user !== null) {
            return user;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.username, sub: user.userId };
        const userAuthenticated = await this.validateUser(user.username, user.password);
        if (userAuthenticated == null) {
            return {
                access_token: null,
            };
        }
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    registerUser(userDto) {
        const { password, confirmPassword } = userDto;
        if (password !== confirmPassword) {
            throw new common_1.HttpException("The password and confirmPassword field are not equals", common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return this.usersService.save(userDto.email, userDto.password);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map