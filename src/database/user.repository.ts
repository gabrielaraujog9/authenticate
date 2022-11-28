import { User } from "@prisma/client";
import { prisma } from "../libs/prisma";

export class UserRepository {
  public async register(data: UserRegisterData): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    })

    return user;
  }

}

export type UserRegisterData = {
  name: string;
  email: string;
  password: string;
}
