const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/CustomerController')

router.post('/', CustomerController.post)
router.post('/authenticate', CustomerController.authenticate)
router.post('/refreshToken', CustomerController.refreshToken)
module.exports = router