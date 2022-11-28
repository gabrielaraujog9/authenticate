
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { UserRepository } from '../database/user.repository'
import { prisma } from '../libs/prisma'

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/users/create', async (request, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string()
    })
    const { email, name, password } = createUserSchema.parse(request.body)
    
    const userRepository = new UserRepository();
    const user = userRepository.register({
      email,
      name,
      password
    })

    if(!user) return reply.status(409).send("User already exist")

    return reply.status(201).send(user);
  }) 
}