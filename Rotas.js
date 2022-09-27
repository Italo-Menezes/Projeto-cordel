let express = require('express')
let router = express.Router();
let productosController = require('./controllers/productosController')
router.get('/criar',productosController.index)

module.exports = router; 