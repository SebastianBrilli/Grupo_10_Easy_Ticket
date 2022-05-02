//Requerimos los modulos basicos y hacemos los promeros ajustes
const express=require("express");
const path =require("path");
const app=express();
const publicPath=path.resolve(__dirname,"./public");
const methodOverride = require('method-override');

//Importamos las rutas
const rutasHome=require('./routes/rutasHome.js')
const rutasProductDetail=require('./routes/rutasProductDetail.js')
const rutasCarroDeCompras=require('./routes/rutasCarroDeCompras.js')
const rutasLogin=require('./routes/rutasLogin.js')
const rutasRegister=require('./routes/rutasRegister.js')

//Definimos carpeta de archivos publicos
app.use(express.static(publicPath));

//Definimos que la info de formulario se lea como objeto literal y la posibilidad de convertirlo a Json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Habilitacion de metodos 
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

//Definicion del motor de plantillas
app.set('view engine', 'ejs'); 


//Ponemos a correr el servidor
app.listen( process.env.PORT || 3000,()=>{
    console.log("Servidor funcionando en el puerto 3000")
});

//Direccionamos cada pagina con su archivo de rutas
app.use('/', rutasHome);
app.use('/productDetail',rutasProductDetail);
app.use("/carro",rutasCarroDeCompras);
app.use("/login",rutasLogin);
app.use("/register",rutasRegister);





