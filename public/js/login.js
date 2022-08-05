window.addEventListener("load", function(){
let menuDesplegable= this.document.querySelector(".MenuDesplegable")
let botonMenu= this.document.querySelector(".opcionMenu")
var mostrar= true;
//FORMULARIO Y BOTON
let botonSubmint = this.document.querySelector(".boton_guardar_evento")
let formulario = this.document.querySelector(".Formulario")

//ERRORES CAMPO EMAIL
let campoEmail = document.getElementById("email")
let errEmail = this.document.querySelector(".erroresEmailRegister")
//ERRORES CAMPO Password
let campoPassword = document.getElementById("password")
let errPassword = this.document.querySelector(".erroresContraseñaRegister")

  
//Declaracion de objetos donde se guardan los errores

const erroresEmail={}; 
const erroresPassword={};


campoEmail.addEventListener('input', e => {
    //guardamos el valor actual del input
    const value = parseInt(e.currentTarget.value);

    //si el valor se pasa de 100 lo reseteamos a 0 y mostramos la alerta
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
        erroresPassword.password="Debes poner una contraseña"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else{
        erroresPassword.password=""
        campoPassword.style.color="black"
        campoPassword.style.background="white"
}

    if(Object.keys(erroresPassword).length >=1){
        errPassword.innerHTML =(erroresPassword.password) ? erroresPassword.password:"";}
    });

botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
   



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
        erroresPassword.password="Debes poner una contraseña"
        campoPassword.style.background="rgb(254, 95, 95)"

    }else{
        erroresPassword.password=""
        campoPassword.style.color="black"
        campoPassword.style.background="white"
}

    if(Object.keys(erroresPassword).length >=1){
        errPassword.innerHTML =(erroresPassword.password) ? erroresPassword.password:"";}


    const finalResult = {...erroresEmail,...erroresPassword};
    console.log(finalResult)

    if(finalResult.email ==="" && finalResult.password ===""){
        console.log(finalResult)
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



    




