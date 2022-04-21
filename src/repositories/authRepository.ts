import authService, { userData } from "../services/authService.js";
import * as errorUtils from "../utils/errorUtils.js"
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";


export async function signUp(user: userData) {
  const secretKey = process.env.JWT_SECRET;
	const hashPassword: string = bcrypt.hashSync(user.password, 8);
	console.log(hashPassword)
	
	const userData = {
		email: user.email,
		password: hashPassword
	}

  const token = jwt.sign(user, secretKey);
	
  await	authService.createUser(userData)
	return;
}

export async function login(userData: userData) {
	const {email, password} = userData;
	const user = await authService.findUserByEmail(email)
	if(!user) errorUtils.notFound()

	const hashPassword = user.password;
	const validatePassword = bcrypt.compareSync(password, hashPassword)
	if(!validatePassword) errorUtils.unauthorized()

	const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(userData, secretKey);

	return token;
}
