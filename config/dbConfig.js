const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection Successful'))
  .catch((err) => console.log(err))

module.exports = mongoose
