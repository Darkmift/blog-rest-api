const Joi = require('joi');

const schemas = {
  user: {
    userRegister: Joi.object({
      first_name: Joi.string().min(2).max(99).required(),
      last_name: Joi.string().min(2).max(99).required(),
      age: Joi.number().min(6).max(120).required(),
      business: Joi.boolean().required(),
      birth_date: Joi.date,
      email: Joi.string().min(2).max(99).email().required(),
      password: Joi.string().min(2).max(99).required()
    }),
    userLogin: Joi.object({
      email: Joi.string().min(2).max(99).email().required(),
      password: Joi.string().min(2).max(99).required()
    }),
  },
  post: {
    newPost: Joi.object({
      title: Joi.string().min(2).max(99).required(),
      body: Joi.string().min(2).max(500).required(),
      author_id: Joi.string()
    }),
  }
}

module.exports = { schemas };