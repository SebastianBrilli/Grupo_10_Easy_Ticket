const express = require("express");
const router = express.Router();

const registerController = require('../controllers/registerController')

//Primera ruta de pruductDetail
router.get('/', registerController.register);

//Segunda ruta de pruductDetail
//router.get('/', controller.???);

//Tercera ruta de pruductDetail
//router.get('/', controller.???);



module.exports = router;