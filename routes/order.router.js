const router = require('express').Router()
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken')
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  monthlyIncome,
} = require('../controllers/order.controller')

// Create Order
router.post('/', verifyToken, createOrder)
// Update Order
router.put('/:id', verifyTokenAndAdmin, updateOrder)
// Delete Order
router.delete('/:id', verifyTokenAndAdmin, deleteOrder)
// Get User Orders
router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrder)
// Get All Orders
router.get('/', verifyTokenAndAdmin, getAllOrders)

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, monthlyIncome)

module.exports = router
