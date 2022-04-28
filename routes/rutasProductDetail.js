const express = require("express");
const router = express.Router();

const productController = require('../controllers/productDetailcontroller')

//Primera ruta de pruductDetail
router.get('/', productController.product);

//Segunda ruta de pruductDetail
//router.get('/', controller.???);

//Tercera ruta de pruductDetail
//router.get('/', controller.???);


module.exports = router;