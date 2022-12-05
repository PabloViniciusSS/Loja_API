const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController')

router.post('/', OrderController.post)
router.get('/', OrderController.get)

module.exports = router