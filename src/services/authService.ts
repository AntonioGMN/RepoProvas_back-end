import { prisma } from "../database.js";
import { users } from "@prisma/client";

export type userData = Omit<users, "id">;

function createUser(user: userData) {
	return prisma.users.create({
		data: user,
	});
}

function findUserByEmail(email: string){
	return prisma.users.findFirst({
		where: {
			email: email
		}
	})
}

export default {
	createUser,
	findUserByEmail
}
