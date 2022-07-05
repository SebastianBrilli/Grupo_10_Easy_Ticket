// Requerimos las librerias necesarias
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Requerimos el controlador

const registerController = require('../controllers/registerController')

// Mediante destructuracion requerimos la propiedad body de express-validator

const {body}= require ('express-validator');

// Definimos ubicacion y nombre de archivos

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       let folder = path.join(__dirname,'../public/images/users')
       cb(null, folder); 
    }, 
    filename: function (req, file, cb) { 
        let imageName= 'usuario'+ Date.now() + path.extname(file.originalname);
       cb(null, imageName)
    }
    });

const fileUpload = multer({ storage: storage });

//Validaciones

const validateRegister = [
body('first_name').notEmpty().withMessage('Debes completar el nombre'),
body('last_name').notEmpty().withMessage('Debes completar el apellido'),
body('email').isEmail().withMessage('Debes colocar un email valido'),
body('password').notEmpty().withMessage('Debes colocar una contraseña'),
body('category').notEmpty().withMessage('Debes seleccionar una opcion')
];

// Definimos las rutas con sus respectivos metodos

router.get('/', registerController.create);
router.post('/', fileUpload.single("userImage") , validateRegister,  registerController.storeNew);

router.get('/list', registerController.list);

router.get('/edit/:id', registerController.edit);
router.put('/edit/:id', fileUpload.single('image'), validateRegister, registerController.storeEdit);

router.delete('/delete/:id', registerController.remove);

module.exports = router;