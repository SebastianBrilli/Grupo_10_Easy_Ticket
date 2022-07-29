
window.addEventListener("load", function(){
let menuDesplegable= this.document.querySelector(".MenuDesplegable")
let botonMenu= this.document.querySelector(".opcionMenu")
var mostrar= true;
//FORMULARIO Y BOTON
let botonSubmint = this.document.querySelector(".boton_guardar_evento")
let formulario = this.document.querySelector(".Formulario")
//ERRORES Email
let campoEmail = document.getElementById("email")
let errEmail = this.document.querySelector(".erroresEmail")
//ERRORES Password
let campoPassword = document.getElementById("Password")
let errPassword = this.document.querySelector(".erroresPassword")




//ERRORES CAMPO Email
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let errores={};
    if(campoEmail.value.length<1){
        errores.email="Debes poner un email"
        campoEmail.style.background="rgb(254, 95, 95)"

    }if(Object.keys(errores).length >=1){
        errEmail.innerHTML =(errores.email) ? errores.email:"";
        console.log(errores)
    }else{
        formulario.Submit();
    }
    

})

 //ERRORES CAMPO Password
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresPassword={};
    if(campoPassword.value.length<1){
        erroresPassword.password="Debes poner un precio al evento"
        campoPassword.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresPassword).length >=1){
        errPassword.innerHTML =(erroresPassword.password) ? erroresPassword.password:"";
        
    }else{
        
        formulario.Submit();
    }


})

 


//Botón menú  
botonMenu.addEventListener("click",function(e){
        if(mostrar == true){
            menuDesplegable.style.display="block"
            mostrar =false;
        }else{
            botonMenu.addEventListener("click",function(e){
                if(e.target =! true){
                    menuDesplegable.style.display="none"   
                }
            },true);
            menuDesplegable.style.display="none"
            mostrar=true
        }
})


})



    




