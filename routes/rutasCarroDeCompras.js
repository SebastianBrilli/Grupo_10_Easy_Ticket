const express = require("express");
const router = express.Router();

const carroController = require('../controllers/carroController')

//Primera ruta de pruductDetail
router.get('/', carroController.carro);

//Segunda ruta de pruductDetail
router.get('/:id', carroController.show);
router.post('/:id', carroController.confirm);

//Tercera ruta de pruductDetail
//router.get('/', controller.???);


module.exports = router;