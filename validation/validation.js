const Joi = require('joi')

const register = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
      .message(
        'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character'
      )
      .min(8)
      .required(),
  }) 


const login = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
  })

module.exports = {register , login}