import { FastifyRequest, FastifyReply } from "fastify";
import { HttpMethod, Route } from "../routes";

export class StatusRoute implements Route {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod
  ) {}

  public static create() {
    return new StatusRoute("/status", HttpMethod.GET);
  }

  public getPath(): string {
    return this.path;
  }

  public getMethod(): HttpMethod {
    return this.method;
  }

  public getHandler() {
    return async (
      request: FastifyRequest,
      reply: FastifyReply
    ): Promise<void> => {
      reply.status(200).send({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      });
    };
  }
}
