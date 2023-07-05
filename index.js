const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('./config/dbConfig')
dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/api/auth', require('./routes/auth.router'))
app.use('/api/users', require('./routes/user.router'))
app.use('/api/products', require('./routes/products.router'))
app.use('/api/carts', require('./routes/cart.router'))
app.use('/api/orders', require('./routes/order.router'))
app.use('/api/checkout', require('./routes/stripe.router'))

app.listen(process.env.PORT || 5000, () => {
  console.log('server running at port 5000')
})
