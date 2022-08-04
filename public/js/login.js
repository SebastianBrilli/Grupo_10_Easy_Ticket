



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
 

botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
   



 //ERRORES CAMPO EMAIL

 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(campoEmail.value.length<1){
        erroresEmail.email="Debes poner un email"
        campoEmail.style.borderColor="rgb(254, 95, 95)"
        campoEmail.style.backgroundColor="rgb(58, 41, 41)"
        
//Email valido 
    }else if(!campoEmail.value.match(mailformat)){
        erroresEmail.email="Email invalido"
        campoEmail.style.borderColor="rgb(254, 95, 95)"
        campoEmail.style.backgroundColor="rgb(58, 41, 41)"

}
    else{
        erroresEmail.email=""
        campoEmail.style.borderColor=null
        campoEmail.style.backgroundColor=null
        campoEmail.style.borderColor="rgb(80, 189, 46)"
}  

    //No puede repertise

    if(Object.keys(erroresEmail).length >=1){
        errEmail.innerHTML =(erroresEmail.email) ? erroresEmail.email:"";
    
//Campo Password

    }if(campoPassword.value.length<1){
        erroresPassword.password="Debes poner una contraseña"
        campoPassword.style.borderColor="rgb(254, 95, 95)"
        campoPassword.style.backgroundColor="rgb(58, 41, 41)"

    }else{
        erroresPassword.password=""
        campoPassword.style.borderColor=null
        campoPassword.style.backgroundColor=null
        campoPassword.style.borderColor="rgb(80, 189, 46)"
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


    
})



    




