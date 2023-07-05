const router = require('express').Router()
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken')
const {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
} = require('../controllers/cart.controller')

// CREATE CART
router.post('/', verifyToken, createCart)
// UPDATE CART
router.put('/:id', verifyTokenAndAuthorization, updateCart)
// DELETE CART
router.delete('/:id', verifyTokenAndAuthorization, deleteCart)
// GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)
// GET ALL
router.get('/', verifyTokenAndAdmin, getAllCarts)

module.exports = router
