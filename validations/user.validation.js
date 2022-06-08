const Joi = require('joi');

function validateUser(user)
{
const createUser = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      role: Joi.string().required().valid('user', 'admin')
    })
        return createUser.validate(user);
  }
  module.exports = {
      validateUser
  }