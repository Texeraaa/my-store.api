"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusRoute = void 0;
const routes_1 = require("../routes");
class StatusRoute {
    constructor(path, method) {
        this.path = path;
        this.method = method;
    }
    static create() {
        return new StatusRoute("/status", routes_1.HttpMethod.GET);
    }
    getPath() {
        return this.path;
    }
    getMethod() {
        return this.method;
    }
    getHandler() {
        return (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.status(200).send({
                status: "ok",
                uptime: process.uptime(),
                timestamp: new Date().toISOString(),
            });
        });
    }
}
exports.StatusRoute = StatusRoute;
