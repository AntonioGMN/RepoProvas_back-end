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

function createSession(id: number, token: string){
	const session = {
		userId: id,
		token
	}

	return prisma.sessions.create({
		data: session,
	})
}	

function findSession(id: number, token: string){
	return prisma.sessions.findFirst({
		where: {
			userId: id,
			token: token
		}
	})
}	

function logout(token: string){
	return prisma.sessions.delete({
		where: {
			token: token
		}
	})
}	

export default {
	createUser,
	findUserByEmail,
	createSession,
	findSession,
	logout
}
