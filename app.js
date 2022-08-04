//Requerimos los modulos basicos y hacemos los promeros ajustes
const express=require("express");
const app=express();

const session=require("express-session");
const cookies=require("cookie-parser");
const path =require("path");

const publicPath=path.resolve(__dirname,"./public");
const methodOverride = require('method-override');


//Importamos las rutas
const rutasHome=require('./routes/rutasHome.js')
const rutasEvents=require('./routes/rutasEvents.js')
const rutasCarroDeCompras=require('./routes/rutasCarroDeCompras.js')
const rutasLogin=require('./routes/rutasLogin.js')
const rutasRegister=require('./routes/rutasRegister.js')
//IMPORTAMOS APIS
const rutasUsers=require("./routes/api/rutasUsers")
const rutasProducts=require("./routes/api/rutasProducts")


// Requerimos el middleware
const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware')

//Definimos el middleware de aplicacion para trabajar con sesiones
app.use(session({
    secret: 'esto es un secreto',
    resave: false,
    saveUninitialized: false

}));

app.use(cookies())

//Definimos carpeta de archivos publicos
app.use(express.static(publicPath));

//Ponemos a funcionar el middleware de aplicacion

app.use(userLoggedMiddleware);

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
app.use('/events',rutasEvents);
app.use("/carro",rutasCarroDeCompras);
app.use("/login",rutasLogin);
app.use("/register",rutasRegister);

//APIS
app.use("/api",rutasUsers);
app.use("/api",rutasProducts);




