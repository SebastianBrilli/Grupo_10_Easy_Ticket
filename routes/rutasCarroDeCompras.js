const express = require("express");
const router = express.Router();

const carroController = require('../controllers/carroController')

const guestToBuy = require('../middlewares/guestToBuy')

router.get('/:id', guestToBuy, carroController.show);

router.post('/:id', carroController.confirm);

module.exports = router;