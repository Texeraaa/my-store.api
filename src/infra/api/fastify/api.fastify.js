"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFastify = void 0;
const fastify_1 = __importDefault(require("fastify"));
class ApiFastify {
    constructor(routes) {
        this.app = (0, fastify_1.default)();
        this.addRoutes(routes);
    }
    static create(routes) {
        return new ApiFastify(routes);
    }
    addRoutes(routes) {
        routes.forEach((route) => {
            const path = route.getPath();
            const method = route.getMethod();
            const handler = route.getHandler();
            this.app[method](path, handler);
        });
    }
    start(port) {
        console.log("teste");
        this.app.listen({ port: port }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Server listening at ${address}`);
            console.log(this.app.printRoutes());
        });
    }
}
exports.ApiFastify = ApiFastify;
