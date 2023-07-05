const validateRequest = (req, next, schema)=>{
    const { error } = schema.validate(req.body)
    if (error) {
      const errorMessage = error.details.map((error) => error.message).join(', ')
      return res.status(400).json({ message: errorMessage })
    } else {
      next()
    }
} 

module.exports = {validateRequest}