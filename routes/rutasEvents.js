// Requerimos las librerias necesarias
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Requerimos el controlador

const productController = require('../controllers/productController');

// Mediante destructuracion requerimos la propiedad body de express-validator

const {body}= require ('express-validator');

// Definimos ubicacion y nombre de archivos

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       let folder = path.join(__dirname,'../public/images')
       cb(null, folder); 
    }, 
    filename: function (req, file, cb) { 
        let imageName= 'evento'+ Date.now() + path.extname(file.originalname);
       cb(null, imageName)
    }
    });

const fileUpload = multer({ storage: storage });

const validateRegister = [
    body('name').notEmpty().withMessage('Debes completar el nombre del evento'),
    body('price').notEmpty().withMessage('Debes completar el precio de la entrada'),
    body('date').isDate().withMessage('Debes colocar una fecha valida'),
    body('address').notEmpty().withMessage('Debes completar la direccion'),
    body('city').notEmpty().withMessage('Debes completar la ciudad'),
    body('category').notEmpty().withMessage('Debes seleccionar una categoria'),
    body('description').notEmpty().withMessage('Debes escribir una descripcion del evento')
    ];

// Definimos las rutas con sus respectivos metodos

router.get('/', productController.index);

router.get('/list', productController.list);

router.get('/create', productController.create);
router.post('/create',fileUpload.single('image'), validateRegister, productController.storeNew);

router.get('/:id/edit', productController.edit);
router.put('/:id/edit', fileUpload.single('image'), validateRegister, productController.storeEdit);

router.get('/:id', productController.detail);

router.delete('/delete/:id', productController.remove);


module.exports = router;