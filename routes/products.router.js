const router = require('express').Router()
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken')

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require('../controllers/products.controller')

// CREATE Product
router.post('/', verifyTokenAndAdmin, createProduct)
// Update Product
router.put('/:id', verifyTokenAndAdmin, updateProduct)
// Delete Product
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)
// GET Product
router.get('/find/:id', getProduct)
// GET ALL Products
router.get('/', getAllProducts)

module.exports = router
