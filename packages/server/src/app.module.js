"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users/users.module");
var auth_module_1 = require("./auth/auth.module");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./users/Entities/user.entity");
var graphql_1 = require("@nestjs/graphql");
var config_1 = require("@nestjs/config");
var solutions_module_1 = require("./solutions/solutions.module");
var solution_entity_1 = require("./solutions/domain/entities/solution.entity");
var attachment_entity_1 = require("./solutions/domain/entities/attachment.entity");
var canvas_entity_1 = require("./solutions/domain/entities/canvas.entity");
var terminus_1 = require("@nestjs/terminus");
var health_controller_1 = require("./health/health.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot(),
                typeorm_1.TypeOrmModule.forRoot({
                    type: process.env.DRIVER_DB,
                    host: process.env.HOST_DB,
                    port: process.env.PORT_DB,
                    //url: process.env.URL_DB as any,
                    database: process.env.DATABASE,
                    entities: [user_entity_1.User, solution_entity_1.Solution, attachment_entity_1.Attachment, canvas_entity_1.Canvas],
                    logging: true,
                    useUnifiedTopology: true
                }),
                graphql_1.GraphQLModule.forRoot({
                    autoSchemaFile: 'src/schema/schema.gql',
                    context: function (_a) {
                        var req = _a.req;
                        return ({ req: req });
                    },
                    uploads: {
                        maxFileSize: 10000000,
                        maxFiles: 5
                    }
                }),
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                solutions_module_1.SolutionsModule,
                terminus_1.TerminusModule
            ],
            controllers: [health_controller_1.HealthController],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
