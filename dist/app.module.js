"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/Entities/user.entity");
const graphql_1 = require("@nestjs/graphql");
const config_1 = require("@nestjs/config");
const solutions_module_1 = require("./solutions/solutions.module");
const solution_entity_1 = require("./solutions/domain/entities/solution.entity");
const attachment_entity_1 = require("./solutions/domain/entities/attachment.entity");
const canvas_entity_1 = require("./solutions/domain/entities/canvas.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DRIVER_DB,
                host: process.env.HOST_DB,
                port: process.env.PORT_DB,
                database: process.env.DATABASE,
                entities: [user_entity_1.User, solution_entity_1.Solution, attachment_entity_1.Attachment, canvas_entity_1.Canvas],
                logging: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'src/schema/schema.gql',
                context: ({ req }) => ({ req }),
                uploads: {
                    maxFileSize: 10000000,
                    maxFiles: 5
                }
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            solutions_module_1.SolutionsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map