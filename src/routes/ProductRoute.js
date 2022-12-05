const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProductController')
const authService = require('../services/authservice')

router.post('/',authService.isAdmin, ProdutoController.post)

router.get('/', ProdutoController.get)
router.get('/:slug', ProdutoController.getBySlug)
router.get('/admin/:id',  ProdutoController.getById)
router.get('/tags/:tag', ProdutoController.getByTag)

router.put('/:id',authService.isAdmin, ProdutoController.put)

router.delete('/',authService.isAdmin, ProdutoController.delete)


module.exports = router