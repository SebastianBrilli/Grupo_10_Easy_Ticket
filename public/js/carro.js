window.addEventListener("load", function(){
    console.log('hola')

    let cantidadEntradas= document.getElementById("cantidad-entradas")
    let precio= document.getElementById("price")
    let total= document.getElementById("total")
    let botonConfirmar= document.getElementById("confirm")
    
    let valor= parseInt(precio.innerText);
    let cantidad = 0;
    let valorTotal = 0;
    

    cantidadEntradas.addEventListener("change", function(e){
        
        cantidad = parseInt(this.value)
        valorTotal=valor*cantidad
        total.innerText=(valorTotal)+' $'
    })


    // botonConfirmar.addEventListener("submit", function(e){
    // e.preventDefault();


    // })
})
     


 


    
    // //ERRORES CAMPO EMAIL
    // let campoEmail = document.getElementById("email")
    // let errEmail = this.document.querySelector(".erroresEmailRegister")
    // //ERRORES CAMPO Password
    // let campoPassword = document.getElementById("password")
    // let errPassword = this.document.querySelector(".erroresContraseñaRegister")
    
      
    // //Declaracion de objetos donde se guardan los errores
    
    // const erroresEmail={}; 
    // const erroresPassword={};
     
    
    // botonSubmint.addEventListener("click", function(e){
    //     e.preventDefault();
       
    
    
    
    //  //ERRORES CAMPO EMAIL
    
    //  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
    //     if(campoEmail.value.length<1){
    //         erroresEmail.email="Debes poner un email"
    //         campoEmail.style.background="rgb(254, 95, 95)"
            
    // //Email valido 
    //     }else if(!campoEmail.value.match(mailformat)){
    //         erroresEmail.email="Email invalido"
    
    // }
    //     else{
    //         erroresEmail.email=""
    //         campoEmail.style.color="black"
    //         campoEmail.style.background="white"
    // }  
    
    //     //No puede repertise
    
    //     if(Object.keys(erroresEmail).length >=1){
    //         errEmail.innerHTML =(erroresEmail.email) ? erroresEmail.email:"";
        
    // //Campo Password
    
    //     }if(campoPassword.value.length<1){
    //         erroresPassword.password="Debes poner una contraseña"
    //         campoPassword.style.background="rgb(254, 95, 95)"
    
    //     }else{
    //         erroresPassword.password=""
    //         campoPassword.style.color="black"
    //         campoPassword.style.background="white"
    // }
    
    //     if(Object.keys(erroresPassword).length >=1){
    //         errPassword.innerHTML =(erroresPassword.password) ? erroresPassword.password:"";}
    
    
    //     const finalResult = {...erroresEmail,...erroresPassword};
    //     console.log(finalResult)
    
    //     if(finalResult.email ==="" && finalResult.password ===""){
    //         console.log(finalResult)
    //     formulario.submit()
    
    
    // })