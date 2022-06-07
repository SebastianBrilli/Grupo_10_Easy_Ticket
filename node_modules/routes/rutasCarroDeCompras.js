const express = require("express");
const router = express.Router();

const carroController = require('../controllers/carroController')

//Primera ruta de pruductDetail
router.get('/', carroController.carro);

//Segunda ruta de pruductDetail
//router.get('/', controller.???);

//Tercera ruta de pruductDetail
//router.get('/', controller.???);


module.exports = router;