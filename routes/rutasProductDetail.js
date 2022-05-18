// Requerimos las librerias necesarias
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Requerimos el controlador

const productController = require('../controllers/productDetailcontroller');

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

// Definimos las rutas con sus respectivos metodos

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/create',fileUpload.single('image'), productController.storeNew);

router.get('/:id/edit', productController.edit);
router.put('/:id/edit', fileUpload.single('image'), productController.storeEdit);

router.get('/:id', productController.detail);

router.delete('/:id/edit', productController.remove);


module.exports = router;