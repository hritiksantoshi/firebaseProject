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
function signinUser(user){
  const signin = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required()
  })
  return signin.validate(user);
}
  module.exports = {
      validateUser,
      signinUser
  }