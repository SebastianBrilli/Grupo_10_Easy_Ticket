const express = require("express");
const router = express.Router();
const path = require('path');

const userApiController = require("../../controllers/api/users.js")

router.get('/users', userApiController.list);
router.get('/users/:id', userApiController.detail);


module.exports = router;