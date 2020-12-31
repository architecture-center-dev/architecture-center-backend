"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;
let ClusterService = class ClusterService {
    static clusterize(callback) {
        if (cluster.isMaster) {
            console.log(`MASTER SERVER (${process.pid}) IS RUNNING `);
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }
            cluster.on('exit', (worker, code, signal) => {
                console.log(`worker ${worker.process.pid} died`);
            });
        }
        else {
            callback();
        }
    }
};
ClusterService = __decorate([
    common_1.Injectable()
], ClusterService);
exports.default = ClusterService;
//# sourceMappingURL=cluster.service.js.map