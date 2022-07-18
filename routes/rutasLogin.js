const express = require("express");
const router = express.Router();

const loginController = require('../controllers/loginController')

// Requerimos el middleware

const guestMiddleware = require ('../middlewares/guestMiddleware')


router.get('/', guestMiddleware, loginController.login);
router.post('/', loginController.loginProcess);

router.get('/logout', loginController.logOut);




module.exports = router;