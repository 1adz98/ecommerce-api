const router = require('express').Router()
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken')

const {
  deleteUser,
  getUser,
  updateUser,
  getAllUsers,
  getUserStats,
} = require('../controllers/user.controller')

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateUser)
// DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)
// GET USER
router.get('/find/:id', verifyTokenAndAdmin, getUser)
// GET ALL USERS
router.get('/', verifyTokenAndAdmin, getAllUsers)
// GET USERS STATS
router.get('/stats', verifyTokenAndAdmin, getUserStats)

module.exports = router
