import { ApiFastify } from "./infra/api/fastify/api.fastify";
import { StatusRoute } from "./infra/api/fastify/routes/status/status.fastify.routes";

function main() {
  const statusRoute = StatusRoute.create();
  const api = ApiFastify.create([statusRoute]);
  const port = 8080;
  api.start(port);
}

main();
