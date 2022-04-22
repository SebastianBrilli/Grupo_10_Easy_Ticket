const express=require("express");
const path =require("path");
const app=express();
const publicPath=path.resolve(__dirname,"./public");

app.use(express.static(publicPath));

app.listen( process.env.PORT || 3000,()=>{
    console.log("Servidor funcionando en el puerto 3000")
});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
app.get("/carro",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/carroDeCompras.html"))
});

app.get("/productDetail",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))
});




