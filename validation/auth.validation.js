const Joi = require('joi')
const {register , login} = require('./validation.js')
const {validateRequest} = require('./validate.request.js')

const registerValidation = (req, res, next) => {
  validateRequest(req, next, register)
}

const loginValidation = (req, res, next) => {
  validateRequest(req, next, login)
}

module.exports = {
  registerValidation,
  loginValidation,
}
