import { Api } from "../api";
import fastify, { FastifyInstance } from "fastify";
import { Route } from "./routes/routes";

export class ApiFastify implements Api {
  private app: FastifyInstance;
  constructor(routes: Route[]) {
    this.app = fastify();
    this.addRoutes(routes);
  }

  public static create(routes: Route[]) {
    return new ApiFastify(routes);
  }

  private addRoutes(routes: Route[]) {
    routes.forEach((route) => {
      const path = route.getPath();
      const method = route.getMethod();
      const handler = route.getHandler();

      this.app[method](path, handler);
    });
  }

  public start(port: number): void {
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
