"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_fastify_1 = require("./infra/api/fastify/api.fastify");
const status_fastify_routes_1 = require("./infra/api/fastify/routes/status/status.fastify.routes");
function main() {
    const statusRoute = status_fastify_routes_1.StatusRoute.create();
    const api = api_fastify_1.ApiFastify.create([statusRoute]);
    const port = 8080;
    api.start(port);
}
main();
