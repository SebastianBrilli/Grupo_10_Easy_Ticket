



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
//ERRORES CAMPO Password
let campoPassword = document.getElementById("Password")
let errPassword = this.document.querySelector(".erroresContraseñaRegister")
//ERRORES CAMPO Category
let campoCategory = document.getElementById("category")
let errCategory = this.document.querySelector(".erroresCategoriaRegister")

let campoImagen = document.getElementById("userImage")
let errImagen = this.document.querySelector(".erroresImagenRegister")
  
//Declaracion de objetos donde se guardan los errores
const errores={};
const erroresApellido={};
const erroresEmail={}; 
const erroresPassword={};
const erroresCategoria={};
const erroresImagen={}; 



campoNombre.addEventListener('input', e => {
    //guardamos el valor actual del input
    const value = parseInt(e.currentTarget.value);

    //si el valor se pasa de 100 lo reseteamos a 0 y mostramos la alerta
    if(campoNombre.value.length<1){
        errores.first_name="Debes poner un nombre"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else if(campoNombre.value.length>0 && campoNombre.value.length<2){
        errores.first_name="El nombre debe tener al menos 2 caracteres"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else{
        errores.first_name=""
        campoNombre.style.color="black"
        campoNombre.style.background="green"
    }
    if(Object.keys(errores).length >=1){
        errName.innerHTML =(errores.first_name) ? errores.first_name:"";
        
    }
  });

  campoApellido.addEventListener('input', e => {
      //guardamos el valor actual del input
      const value = parseInt(e.currentTarget.value);

      if(campoApellido.value.length<1){
        erroresApellido.last_name="Debes poner un Apellido"
        campoApellido.style.background="rgb(254, 95, 95)"

    }else if(campoApellido.value.length>0 && campoApellido.value.length<2){
        erroresApellido.last_name="El nombre debe tener al menos 2 caracteres"
        campoApellido.style.background="rgb(254, 95, 95)"

    }else{
        erroresApellido.last_name=""
        campoApellido.style.color="black"
        campoApellido.style.background="green"
    }
    if(Object.keys(erroresApellido).length >=1){
        errApellido.innerHTML =(erroresApellido.last_name) ? erroresApellido.last_name:"";
        
    }
    });

    campoEmail.addEventListener('input', e => {
      //guardamos el valor actual del input
      const value = parseInt(e.currentTarget.value);
      
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(campoEmail.value.length<1){
        erroresEmail.email="Debes poner un email"
        campoEmail.style.background="rgb(254, 95, 95)"
        
//Email valido 
    }else if(!campoEmail.value.match(mailformat)){
        erroresEmail.email="Email invalido"

}
    else{
        erroresEmail.email=""
        campoEmail.style.color="black"
        campoEmail.style.background="white"
}  

    //No puede repertise

    if(Object.keys(erroresEmail).length >=1){
        errEmail.innerHTML =(erroresEmail.email) ? erroresEmail.email:"";}
    });

    campoPassword.addEventListener('input', e => {
      //guardamos el valor actual del input
      const value = parseInt(e.currentTarget.value);
      
      if(campoPassword.value.length<1){
        erroresPassword.Password="Debes poner una contraseña"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if(campoPassword.value.length>0 && campoPassword.value.length<8){
        erroresPassword.Password="La contraseña debe tener al menos 8 caracteres"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if ( !campoPassword.value.match(/[A-z]/) ) { //validar letra
        erroresPassword.Password="La contraseña debe contener una letra"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if ( !campoPassword.value.match(/[A-Z]/) ) {
        erroresPassword.Password="La contraseña debe contener una letra mayúscula"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if (!campoPassword.value.match(/\d/) ) {
        erroresPassword.Password="La contraseña debe contener un numero"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else{
        erroresPassword.Password=""
        campoPassword.style.color="black"
        campoPassword.style.background="white"
}

    if(Object.keys(erroresPassword).length >=1){
        errPassword.innerHTML =(erroresPassword.Password) ? erroresPassword.Password:"";}
    });

    campoCategory.addEventListener('input', e => {
      //guardamos el valor actual del input
      const value = parseInt(e.currentTarget.value);
      
      if(campoCategory.value.length<1){
        erroresCategoria.category="Debes poner una categoria"
        campoCategory.style.background="rgb(254, 95, 95)"
    
    }else{
        erroresCategoria.category=""
        campoCategory.style.color="black"
        campoCategory.style.background="white"
    }
    if(Object.keys(erroresCategoria).length >=1){
        errCategory.innerHTML =(erroresCategoria.category) ? erroresCategoria.category:"";}
    });

   

    

    campoImagen.addEventListener('input', e => {
      //guardamos el valor actual del input
      const value = parseInt(e.currentTarget.value);
      
      var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(campoImagen.value ) && campoImagen.value.length>1){
        erroresImagen.userImage="'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.'"
        campoImagen.style.background="rgb(254, 95, 95)"
    }
    if(Object.keys(erroresImagen).length >=1){
        errImagen.innerHTML =(erroresImagen.userImage) ? erroresImagen.userImage:"";}
    });

   




botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
   
//ERRORES CAMPO NOMBRE

    if(campoNombre.value.length<1){
        errores.first_name="Debes poner un nombre"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else if(campoNombre.value.length>0 && campoNombre.value.length<2){
        errores.first_name="El nombre debe tener al menos 2 caracteres"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else{
        errores.first_name=""
        campoNombre.style.color="black"
        campoNombre.style.background="green"
    }
    if(Object.keys(errores).length >=1){
        errName.innerHTML =(errores.first_name) ? errores.first_name:"";
        
    }

 //ERRORES CAMPO APELLIDO
  
    if(campoApellido.value.length<1){
        erroresApellido.last_name="Debes poner un Apellido"
        campoApellido.style.background="rgb(254, 95, 95)"

    }else if(campoApellido.value.length>0 && campoApellido.value.length<2){
        erroresApellido.last_name="El nombre debe tener al menos 2 caracteres"
        campoApellido.style.background="rgb(254, 95, 95)"

    }else{
        erroresApellido.last_name=""
        campoApellido.style.color="black"
        campoApellido.style.background="green"
    }
    if(Object.keys(erroresApellido).length >=1){
        errApellido.innerHTML =(erroresApellido.last_name) ? erroresApellido.last_name:"";
        
    }


 //ERRORES CAMPO EMAIL

 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(campoEmail.value.length<1){
        erroresEmail.email="Debes poner un email"
        campoEmail.style.background="rgb(254, 95, 95)"
        
//Email valido 
    }else if(!campoEmail.value.match(mailformat)){
        erroresEmail.email="Email invalido"

}
    else{
        erroresEmail.email=""
        campoEmail.style.color="black"
        campoEmail.style.background="white"
}  

    //No puede repertise

    if(Object.keys(erroresEmail).length >=1){
        errEmail.innerHTML =(erroresEmail.email) ? erroresEmail.email:"";
    
//Campo Password

    }if(campoPassword.value.length<1){
        erroresPassword.Password="Debes poner una contraseña"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if(campoPassword.value.length>0 && campoPassword.value.length<8){
        erroresPassword.Password="La contraseña debe tener al menos 8 caracteres"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if ( !campoPassword.value.match(/[A-z]/) ) { //validar letra
        erroresPassword.Password="La contraseña debe contener una letra"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if ( !campoPassword.value.match(/[A-Z]/) ) {
        erroresPassword.Password="La contraseña debe contener una letra mayúscula"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else if (!campoPassword.value.match(/\d/) ) {
        erroresPassword.Password="La contraseña debe contener un numero"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else{
        erroresPassword.Password=""
        campoPassword.style.color="black"
        campoPassword.style.background="white"
}

    if(Object.keys(erroresPassword).length >=1){
        errPassword.innerHTML =(erroresPassword.Password) ? erroresPassword.Password:"";}
//Campo Categoria

if(campoCategory.value.length<1){
    erroresCategoria.category="Debes poner una categoria"
    campoCategory.style.background="rgb(254, 95, 95)"

}else{
    erroresCategoria.category=""
    campoCategory.style.color="black"
    campoCategory.style.background="white"
}
if(Object.keys(erroresCategoria).length >=1){
    errCategory.innerHTML =(erroresCategoria.category) ? erroresCategoria.category:"";}
//Imagen

    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(campoImagen.value ) && campoImagen.value.length>1){
        erroresImagen.userImage="'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.'"
        campoImagen.style.background="rgb(254, 95, 95)"
    }
    if(Object.keys(erroresImagen).length >=1){
        errImagen.innerHTML =(erroresImagen.userImage) ? erroresImagen.userImage:"";}

    const finalResult = {...errores,...erroresApellido,...erroresEmail,...erroresPassword};
    console.log(finalResult)

    if(finalResult.first_name === "" && finalResult.last_name ==="" && finalResult.email ==="" && finalResult.Password ===""){

    formulario.submit()
}

})




// const finalResult2 = Object.assign(erroresApellido);
// const finalResult3 = Object.assign(erroresEmail);
// const Finalfinal= Object.assign(errores,erroresApellido,erroresEmail)


//if(Object.keys(Finalfinal).length <1){
//    formulario.Submit();
//}
    
})



    




