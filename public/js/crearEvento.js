



window.addEventListener("load", function(){
let menuDesplegable= this.document.querySelector(".MenuDesplegable")
let botonMenu= this.document.querySelector(".opcionMenu")
var mostrar= true;
//FORMULARIO Y BOTON
let botonSubmint = this.document.querySelector(".boton_guardar_evento")
let formulario = this.document.querySelector(".Formulario")
//ERRORES CAMPO NOMBRE
let campoNombre = document.getElementById("name")
let errName = this.document.querySelector(".erroresName")
//ERRORES CAMPO Precio
let campoPrecio = document.getElementById("price")
let errPrecio = this.document.querySelector(".erroresPrecio")
//ERRORES CAMPO Entradas dispoibles
let campoEntradas = document.getElementById("discount")
let errEntradas = this.document.querySelector(".erroresEntradas")
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
    let errores={};
    if(campoNombre.value.length<1){
        errores.name="Debes poner un nombre"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else if(campoNombre.value.length>0 && campoNombre.value.length<5){
        errores.name="El nombre debe tener al menos 5 caracteres"
        campoNombre.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(errores).length >=1){
        errName.innerHTML =(errores.name) ? errores.name:"";
        console.log(errores)
    }else{
        formulario.Submit();
    }
    

})

 //ERRORES CAMPO Precio
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresPrecio={};
    if(campoPrecio.value.length<1){
        erroresPrecio.price="Debes poner un precio al evento"
        campoPrecio.style.background="rgb(254, 95, 95)"

    }else if(campoPrecio.value >150000){
        erroresPrecio.price="El precio maximo permitido para un evento es de $150mil "
        campoPrecio.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresPrecio).length >=1){
        errPrecio.innerHTML =(erroresPrecio.price) ? erroresPrecio.price:"";
    }else{
        
        formulario.Submit();
    }


})

 //ERRORES CAMPO Cantidad de entradas disponibles
 botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresEntradas={};
    if(campoEntradas.value.length<1){
        erroresEntradas.discount="Debes determinar las entradas disponibles del evento"
        campoEntradas.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresEntradas).length >=1){
        errEntradas.innerHTML =(erroresEntradas.discount) ? erroresEntradas.discount:"";
    }else{
        
        formulario.submit();
    }


})


//ERRORES CAMPO Fecha
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresFecha={};
    if(campoFecha.value.length<1){
        erroresFecha.date="Debes determinar la fecha del evento"
        campoFecha.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresFecha).length >=1){
        errFecha.innerHTML =(erroresFecha.date) ? erroresFecha.date:"";
    }else{
        
        formulario.submit();
    }


})
   
//ERRORES CAMPO Lugar
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresLugar={};
    if(campoLugar.value.length<1){
        erroresLugar.address="Debes determinar el lugar del evento"
        campoLugar.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresLugar).length >=1){
        errLugar.innerHTML =(erroresLugar.address) ? erroresLugar.address:"";
    }else{
        
        formulario.submit();
    }


})

//ERRORES CAMPO Ciudad
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresCiudad={};
    if(campoCiudad.value.length<1){
        erroresCiudad.city="Debes determinar la ciudad del evento"
        campoCiudad.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresCiudad).length >=1){
        errCiudad.innerHTML =(erroresCiudad.city) ? erroresCiudad.city:"";
    }else{
        
        formulario.submit();
    }


})

//ERRORES CAMPO Categoria
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresCategoria={};
    if(campoCategoria.value.length<1){
        erroresCategoria.category="Debes determinar la categoria del evento"
        campoCategoria.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresCategoria).length >=1){
        errCategoria.innerHTML =(erroresCategoria.category) ? erroresCategoria.category:"";
    }else{
        
        formulario.submit();
    }


})

//ERRORES CAMPO Imagen
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresImagen={};
    if(campoImagen.value.length<1){
        erroresImagen.image="Debes determinar la descripción del evento"
        campoImagen.style.background="rgb(254, 95, 95)"

    }
    if(Object.keys(erroresImagen).length >=1){
        errImagen.innerHTML =(erroresImagen.image) ? erroresImagen.image:"";
    }else{
        
        formulario.submit();
    }


})


//ERRORES CAMPO Descripcion
botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
    let erroresDescripcion={};
    if(campoDescripcion.value.length<1){
        erroresDescripcion.description="Debes determinar la descripción del evento"
        campoDescripcion.style.background="rgb(254, 95, 95)"

    }else if(campoDescripcion.value.length<20){
        erroresDescripcion.description="La descripción debe tener al menos 20 caracteres"
        campoDescripcion.style.background="rgb(254, 95, 95)"

    }

    if(Object.keys(erroresDescripcion).length >=1){
        errDescripcion.innerHTML =(erroresDescripcion.description) ? erroresDescripcion.description:"";
    }else{
        
        formulario.submit();
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



    




