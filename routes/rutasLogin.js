const express = require("express");
const router = express.Router();

const loginController = require('../controllers/loginController')

//Primera ruta de pruductDetail
router.get('/', loginController.login);

//Segunda ruta de pruductDetail
//router.get('/', controller.???);

//Tercera ruta de pruductDetail
//router.get('/', controller.???);



module.exports = router;