import { FastifyReply, FastifyRequest } from "fastify";

export type HttpMethod = "get" | "post";

export const HttpMethod = {
  GET: "get" as HttpMethod,
  POST: "post" as HttpMethod,
} as const;

export interface Route {
  getHandler(): (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  getPath(): string;
  getMethod(): HttpMethod;
}
