



window.addEventListener("load", function(){
let menuDesplegable= this.document.querySelector(".MenuDesplegable")
let botonMenu= this.document.querySelector(".opcionMenu")
var mostrar= true;
//FORMULARIO Y BOTON
let botonSubmint = this.document.querySelector(".boton_guardar_evento")
let formulario = this.document.querySelector(".formulario")
//ERRORES CAMPO NOMBRE
let campoNombre = document.getElementById("first_name")
let errName = this.document.querySelector(".erroresNombreRegister")
//ERRORES CAMPO APELLIDO
let campoApellido= document.getElementById("last_name")
let errApellido= this.document.querySelector(".erroresApellidoRegister")
//ERRORES CAMPO EMAIL
let campoEmail = document.getElementById("email")
let errEmail = this.document.querySelector(".erroresEmailRegister")
//ERRORES CAMPO fecha
let campoFecha = document.getElementById("date")
let errFecha = this.document.querySelector(".erroresFecha")
//ERRORES CAMPO Lugar
let campoLugar = document.getElementById("address")
let errLugar= this.document.querySelector(".erroresLugar")
//ERRORES CAMPO Ciudad
let campoCiudad = document.getElementById("city")
let errCiudad= this.document.querySelector(".erroresCiudad")
//ERRORES CAMPO Categoria
let campoCategoria = document.getElementById("category")
let errCategoria= this.document.querySelector(".erroresCategoria")
//ERRORES CAMPO Descipcion
let campoDescripcion = document.getElementById("description")
let errDescripcion= this.document.querySelector(".erroresDescripcion")


  
//ERRORES CAMPO NOMBRE

botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
   
    const errores={};
    if(campoNombre.value.length<1){
        errores.first_name="Debes poner un nombre"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else if(campoNombre.value.length>0 && campoNombre.value.length<2){
        errores.first_name="El nombre debe tener al menos 2 caracteres"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else{
        errores.first_name=""
        campoNombre.style.color="black"
        campoNombre.style.background="white"
    }
    if(Object.keys(errores).length >=1){
        errName.innerHTML =(errores.first_name) ? errores.first_name:"";
        
    }

 //ERRORES CAMPO APELLIDO
const erroresApellido={};    
    if(campoApellido.value.length<1){
        erroresApellido.last_name="Debes poner un Apellido"
        campoApellido.style.background="rgb(254, 95, 95)"

    }else if(campoApellido.value.length>0 && campoApellido.value.length<2){
        erroresApellido.last_name="El nombre debe tener al menos 2 caracteres"
        campoApellido.style.background="rgb(254, 95, 95)"

    }else{
        erroresApellido.last_name=""
        campoApellido.style.color="black"
        campoApellido.style.background="white"
    }
    if(Object.keys(erroresApellido).length >=1){
        errApellido.innerHTML =(erroresApellido.last_name) ? erroresApellido.last_name:"";
        
    }



const erroresEmail={};
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 //ERRORES CAMPO EMAIL
 
    
    if(campoEmail.value.length<1){
        erroresEmail.email="Debes poner un email"
        campoEmail.style.background="rgb(254, 95, 95)"
//Email valido 
    }else if(!campoEmail.value.match(mailformat)){
    erroresEmail.email="Email invalido"
}else{
    erroresEmail.email=""
    campoEmail.style.color="black"
    campoEmail.style.background="white"
}  

    //No puede repertise

    if(Object.keys(erroresEmail).length >=1){
        errEmail.innerHTML =(erroresEmail.email) ? erroresEmail.email:"";
    console.log(erroresEmail)
    }
    
 else{
    formulario.submit();
 }
})



//const finalResult = Object.assign(errores);
//const finalResult2 = Object.assign(erroresApellido);
//const finalResult3 = Object.assign(erroresEmail);
//const Finalfinal= Object.assign(errores,erroresApellido,erroresEmail)


//if(Object.keys(Finalfinal).length <1){
//    formulario.Submit();
//}
    
})



    




