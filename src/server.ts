import Fastify, { FastifyInstance } from "fastify";
import { routes } from "./routes";
import { userRoutes } from "./routes/user.route";

const server: FastifyInstance = Fastify({
  logger: true,
});

(async function start() {
  try {
    await server.register(routes)
    await server.register(userRoutes)
    
    await server.listen({ port: 3333 })
  } catch (error) {
    server.log.error(error);
  }
})();