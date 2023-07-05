const Joi = require('joi')

const registerValidation = (req, res, next) => {
  const schema = Joi.object({
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

  validateRequest(req, next, schema)
}

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  validateRequest(req, next, schema)
}

function validateRequest(req, next, schema) {
  const { error } = schema.validate(req.body)
  if (error) {
    const errorMessage = error.details.map((error) => error.message).join(', ')
    return res.status(400).json({ message: errorMessage })
  } else {
    next()
  }
}

module.exports = {
  registerValidation,
  loginValidation,
}
