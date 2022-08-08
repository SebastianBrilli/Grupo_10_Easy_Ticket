const express = require("express");
const router = express.Router();
const path = require('path');

const userApiController = require("../../controllers/api/users.js")

router.get('/users', userApiController.list);
router.get('/users/:id', userApiController.detail);
router.get('/users/image/:id', userApiController.showImage);


module.exports = router;