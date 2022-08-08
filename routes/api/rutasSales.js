const express = require("express");
const router = express.Router();
const path = require('path');

const saleApiController = require("../../controllers/api/sales.js")

router.get('/sales', saleApiController.list);


module.exports = router;