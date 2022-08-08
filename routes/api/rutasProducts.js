const express = require("express");
const router = express.Router();
const path = require('path');

const productApiController = require("../../controllers/api/products")

router.get('/products', productApiController.list);
router.get('/products/:id', productApiController.detail);
router.get('/products/image/:id', productApiController.showImage);


module.exports = router;