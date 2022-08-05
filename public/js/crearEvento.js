



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
//ERRORES CAMPO Imagen
let campoImagen = document.getElementById("image")
let errImagen = this.document.querySelector(".erroresImagen")
//Declaracion de objetos donde se guardan los errores


const erroresNombre={};
const erroresPrecio={};
const erroresEntradas={};
const erroresFecha={};
const erroresLugar={};
const erroresCiudad={};
const erroresCategoria={};
const erroresDescripcion={};
const erroresImagen={};




    //ejecutamos el evento que escucha cuando se escribe
    campoNombre.addEventListener('input', e => {
      //guardamos el valor actual del input
      const value = parseInt(e.currentTarget.value);

      //si el valor se pasa de 100 lo reseteamos a 0 y mostramos la alerta
      if(campoNombre.value.length<1){
        erroresNombre.name="Debes poner un nombre"
        campoNombre.style.background="rgb(254, 95, 95)"
        
    }else if(campoNombre.value.length>0 && campoNombre.value.length<5){
        erroresNombre.name="El nombre debe tener al menos 5 caracteres"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else{
        erroresNombre.name=""
        campoNombre.style.color="black"
        campoNombre.style.background="white"
}

    if(Object.keys(erroresNombre).length >=1){
        errName.innerHTML =(erroresNombre.name) ? erroresNombre.name:"";}
    });

    campoPrecio.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);

        if(campoPrecio.value.length<1){
            erroresPrecio.price="Debes poner un precio"
            campoPrecio.style.background="rgb(254, 95, 95)"
                
    }else{
        erroresPrecio.price=""
        campoPrecio.style.color="black"
        campoPrecio.style.background="green"
}
    if(Object.keys(erroresPrecio).length >=1){
        errPrecio.innerHTML =(erroresPrecio.price) ? erroresPrecio.price:"";}
      });

    campoEntradas.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
        if(campoEntradas.value.length<1){
            erroresEntradas.discount="Debes determinar la cantidad de entradas"
            campoEntradas.style.background="rgb(254, 95, 95)"
            
        }else{
            erroresEntradas.discount=""
            campoEntradas.style.color="black"
            campoEntradas.style.background="green"
    }
        if(Object.keys(erroresEntradas).length >=1){
            errEntradas.innerHTML =(erroresEntradas.discount) ? erroresEntradas.discount:"";}
      });

      campoFecha.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
        if(campoFecha.value.length<1){
            erroresFecha.date="Debes determinar la fecha"
            campoFecha.style.background="rgb(254, 95, 95)"
            
        }else{
            erroresFecha.date=""
            campoFecha.style.color="black"
            campoFecha.style.background="green"
    }
        if(Object.keys(erroresFecha).length >=1){
            errFecha.innerHTML =(erroresFecha.date) ? erroresFecha.date:"";}
      });

      campoLugar.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
        if(campoLugar.value.length<1){
            erroresLugar.address="Debes determinar el lugar del evento"
            campoLugar.style.background="rgb(254, 95, 95)"
            
        }else{
            erroresLugar.address=""
            campoLugar.style.color="black"
            campoLugar.style.background="green"
        }
        if(Object.keys(erroresLugar).length >=1){
            errLugar.innerHTML =(erroresLugar.address) ? erroresLugar.address:"";}
      });

      campoCiudad.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
       if(campoCiudad.value.length<1){
    erroresCiudad.city="Debes determinar la ciudad"
    campoCiudad.style.background="rgb(254, 95, 95)"
    
}else{
    erroresCiudad.city=""
    campoCiudad.style.color="black"
    campoCiudad.style.background="green"
}
if(Object.keys(erroresCiudad).length >=1){
    errCiudad.innerHTML =(erroresCiudad.city) ? erroresCiudad.city:"";}
      });

      campoCategoria.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
        if(campoCategoria.value.length<1){
            erroresCategoria.category="Debes determinar la categoria"
            campoCategoria.style.background="rgb(254, 95, 95)"
            
        }else{
            erroresCategoria.category=""
            campoCategoria.style.color="black"
            campoCategoria.style.background="green"
        }
        if(Object.keys(erroresCategoria).length >=1){
            errCategoria.innerHTML =(erroresCategoria.category) ? erroresCategoria.category:"";}
      });

      campoDescripcion.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
        if(campoDescripcion.value.length<1){
            erroresDescripcion.description="Debes poner una descripción"
            campoDescripcion.style.background="rgb(254, 95, 95)"
            
        }else if(campoDescripcion.value.length>0 && campoDescripcion.value.length<20){
            erroresDescripcion.description="La descripción debe tener al menos 20 caracteres"
            campoDescripcion.style.background="rgb(254, 95, 95)"
    
        }else{
            erroresDescripcion.description=""
            campoDescripcion.style.color="black"
            campoDescripcion.style.background="white"
    }
    
        if(Object.keys(erroresDescripcion).length >=1){
            errDescripcion.innerHTML =(erroresDescripcion.description) ? erroresDescripcion.description:"";}
      });

      campoImagen.addEventListener('input', e => {
        //guardamos el valor actual del input
        const value = parseInt(e.currentTarget.value);
        
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
if(!allowedExtensions.exec(campoImagen.value ) && campoImagen.value.length>1){
    erroresImagen.image="'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.'"
    campoImagen.style.background="rgb(254, 95, 95)"
}
if(Object.keys(erroresImagen).length >=1){
    errImagen.innerHTML =(erroresImagen.image) ? erroresImagen.image:"";}
      });
      


      

botonSubmint.addEventListener("click", function(e){
    e.preventDefault();
   



 //ERRORES CAMPO NOMBRE

    if(campoNombre.value.length<1){
        erroresNombre.name="Debes poner un nombre"
        campoNombre.style.background="rgb(254, 95, 95)"
        
    }else if(campoNombre.value.length>0 && campoNombre.value.length<5){
        erroresNombre.name="El nombre debe tener al menos 5 caracteres"
        campoNombre.style.background="rgb(254, 95, 95)"

    }else{
        erroresNombre.name=""
        campoNombre.style.color="black"
        campoNombre.style.background="white"
}

    if(Object.keys(erroresNombre).length >=1){
        errName.innerHTML =(erroresNombre.name) ? erroresNombre.name:"";}

//Descipción

        if(campoDescripcion.value.length<1){
            erroresDescripcion.description="Debes poner una descripción"
            campoDescripcion.style.background="rgb(254, 95, 95)"
            
        }else if(campoDescripcion.value.length>0 && campoDescripcion.value.length<20){
            erroresDescripcion.description="La descripción debe tener al menos 20 caracteres"
            campoDescripcion.style.background="rgb(254, 95, 95)"
    
        }else{
            erroresDescripcion.description=""
            campoDescripcion.style.color="black"
            campoDescripcion.style.background="white"
    }
    
        if(Object.keys(erroresDescripcion).length >=1){
            errDescripcion.innerHTML =(erroresDescripcion.description) ? erroresDescripcion.description:"";}

 //Precio
    if(campoPrecio.value.length<1){
            erroresPrecio.price="Debes poner un precio"
            campoPrecio.style.background="rgb(254, 95, 95)"
                
    }else{
        erroresPrecio.price=""
        campoPrecio.style.color="black"
        campoPrecio.style.background="green"
}
    if(Object.keys(erroresPrecio).length >=1){
        errPrecio.innerHTML =(erroresPrecio.price) ? erroresPrecio.price:"";}
 
  //Entradas
    if(campoEntradas.value.length<1){
        erroresEntradas.discount="Debes determinar la cantidad de entradas"
        campoEntradas.style.background="rgb(254, 95, 95)"
        
    }else{
        erroresEntradas.discount=""
        campoEntradas.style.color="black"
        campoEntradas.style.background="green"
}
    if(Object.keys(erroresEntradas).length >=1){
        errEntradas.innerHTML =(erroresEntradas.discount) ? erroresEntradas.discount:"";}

    //Fecha
    if(campoFecha.value.length<1){
        erroresFecha.date="Debes determinar la fecha"
        campoFecha.style.background="rgb(254, 95, 95)"
        
    }else{
        erroresFecha.date=""
        campoFecha.style.color="black"
        campoFecha.style.background="green"
}
    if(Object.keys(erroresFecha).length >=1){
        errFecha.innerHTML =(erroresFecha.date) ? erroresFecha.date:"";}



//Lugar
    if(campoLugar.value.length<1){
    erroresLugar.address="Debes determinar el lugar del evento"
    campoLugar.style.background="rgb(254, 95, 95)"
    
}else{
    erroresLugar.address=""
    campoLugar.style.color="black"
    campoLugar.style.background="green"
}
if(Object.keys(erroresLugar).length >=1){
    errLugar.innerHTML =(erroresLugar.address) ? erroresLugar.address:"";}

//Ciudad
if(campoCiudad.value.length<1){
    erroresCiudad.city="Debes determinar la ciudad"
    campoCiudad.style.background="rgb(254, 95, 95)"
    
}else{
    erroresCiudad.city=""
    campoCiudad.style.color="black"
    campoCiudad.style.background="green"
}
if(Object.keys(erroresCiudad).length >=1){
    errCiudad.innerHTML =(erroresCiudad.city) ? erroresCiudad.city:"";}


//Categoria
if(campoCategoria.value.length<1){
    erroresCategoria.category="Debes determinar la categoria"
    campoCategoria.style.background="rgb(254, 95, 95)"
    
}else{
    erroresCategoria.category=""
    campoCategoria.style.color="black"
    campoCategoria.style.background="green"
}
if(Object.keys(erroresCategoria).length >=1){
    errCategoria.innerHTML =(erroresCategoria.category) ? erroresCategoria.category:"";}




//Imagen

var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
if(!allowedExtensions.exec(campoImagen.value ) && campoImagen.value.length>1){
    erroresImagen.image="'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.'"
    campoImagen.style.background="rgb(254, 95, 95)"
}else{
    erroresImagen.image=""
    campoImagen.style.color="black"
    campoImagen.style.background="green"
}
if(Object.keys(erroresImagen).length >=1){
    errImagen.innerHTML =(erroresImagen.image) ? erroresImagen.image:"";}










    const finalResult = {...erroresNombre,...erroresDescripcion,...erroresPrecio,...erroresEntradas,...erroresFecha,...erroresLugar,...erroresCiudad,...erroresCategoria,...erroresImagen};
    console.log(finalResult)

    if(finalResult.name ==="" && finalResult.description ===""&& finalResult.price ===""&& finalResult.discount ==="" && finalResult.date ===""&& finalResult.address ===""&& finalResult.city ===""&& finalResult.category ==="" && finalResult.image ===""){
    console.log(finalResult)
    formulario.submit()
}

})

    
})



    




