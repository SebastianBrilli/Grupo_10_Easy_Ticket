const express = require("express");
const router = express.Router();

const homeController = require('../controllers/homeController')

//Primera ruta de home
router.get('/', homeController.index);

//Segunda ruta de home
//router.get('/', controller.???);

//Tercera ruta de home
//router.get('/', controller.???);


module.exports = router;