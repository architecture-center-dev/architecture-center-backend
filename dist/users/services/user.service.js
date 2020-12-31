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
const user_entity_1 = require("../Entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.salt = 10;
    }
    async save(email, password) {
        const userAlreadyExisits = await this.userRepository.findOne({ where: { email } });
        if (userAlreadyExisits) {
            return "User already exists!";
        }
        const user = new user_entity_1.User();
        user.email = email;
        user.firstAccess = true;
        const bcrypt = require('bcrypt');
        const hash = bcrypt.hashSync(password, this.salt);
        user.password = hash;
        return this.userRepository.save(user);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOne(id);
    }
    async findUserByAndPassword(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        const bcrypt = require('bcrypt');
        const isPasswordMatching = bcrypt.compareSync(password, user.password);
        return isPasswordMatching ? user : null;
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map