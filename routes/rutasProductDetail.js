const express = require("express");
const router = express.Router();

const productController = require('../controllers/productDetailcontroller')

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/create', productController.storeNew);

router.get('/:id/edit', productController.edit);
router.put('/:id/edit', productController.storeEdit);

router.get('/:id', productController.detail);

router.delete('/:id/edit', productController.remove);


module.exports = router;