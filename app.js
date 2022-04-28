const express=require("express");
const path =require("path");
const app=express();
const publicPath=path.resolve(__dirname,"./public");

//Importamos las rutas
const rutasHome=require('./routes/rutasHome.js')
const rutasProductDetail=require('./routes/rutasProductDetail.js')
const rutasCarroDeCompras=require('./routes/rutasCarroDeCompras.js')
const rutasLogin=require('./routes/rutasLogin.js')

//Definimos carpeta de archivos publicos
app.use(express.static(publicPath));

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





