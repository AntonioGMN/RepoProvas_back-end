import joi from "joi";

const userDateSchema = joi.object({
	email: joi.string().email().required(),
  password: joi.string().required(),
});

export default userDateSchema;