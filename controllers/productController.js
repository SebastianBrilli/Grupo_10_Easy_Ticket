const { localsName } = require('ejs');
let fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const productController = {

    filePath: path.join(__dirname, '../data/eventDataBase.json'),
    
    readFile: () => { 
        return JSON.parse(fs.readFileSync(productController.filePath, 'utf-8'))  
    },

    generateID: ()=>{
        let items = productController.readFile();
        let lastItem= items.pop();
        if(lastItem){
            return lastItem.id + 1
        }
        return 1
    },

    list: (req, res) => {
        let event = productController.readFile();
        res.render('eventIndex', { event })
    },

    index: (req,res)=>{
        let event = productController.readFile();
        res.render('productIndex', {event})
    },

    create: (req,res)=>{
        res.render('event-create-form')
    },

    detail: (req,res)=>{
        let event = productController.readFile();
        let idSelected=req.params.id; 										                                                         //Traigo el parametro del producto
        let selectedEvent = event.find(elemento => elemento.id == idSelected);                                                       //Selecciono el evento del array
        let recomendedEvent = event.filter(elemento=> (elemento.category==selectedEvent.category)&&(elemento.id!=idSelected));       //Selecciono otros elementos que tengan la misma categoria    
        
        res.render('productDetail', {selectedEvent, recomendedEvent})                                                            //Renderizo la vista de detalle del procuto pasando los datos como parametros
    },

    storeNew: (req,res)=>{

        let errors = validationResult(req);

        if (errors.isEmpty()) {

        let event = productController.readFile();
        let newId= parseInt(productController.generateID());                               

        let new_event ={                            //Defino el nuevo evento a guardar en el archivo
        id: newId,                                  // Incremento en 1 el valor del ID
        name: req.body.name,                        //Recupero los valores recibitos del formulario y los asigno al correpondiente elemento del OL
        price: parseInt(req.body.price),
        discount: parseInt(req.body.discount),
        date: req.body.date,
        address: req.body.address,
        city: req.body.city,
        category: req.body.category,
        image:req.file ? req.file.filename : '' ,
        description: req.body.description,
        }

        event.push(new_event);                                                          //Guardo el nuevo elemento en la ultima posicion del array de OL
        let eventJASON = JSON.stringify(event, null, ' ');                                           //Transformo en Json
        fs.writeFileSync(productController.filePath , eventJASON);     //Guardo el resultado en el archivo de texto
        
        res.redirect("/productDetail");
        } else {
            res.render('event-create-form', { errors: errors.array(), old: req.body })
        }
                                                        
    },

    edit: (req,res)=>{
        let event = productController.readFile();
        let selectedId= req.params.id;                                          //Tomo el valor del Id recibido del usuario a traves de params
        let selectedEvent = event.find(elemento => elemento.id == selectedId);
       

        res.render("event-edit-form", {selectedEvent});                     //Renderizo la vista enviando los datos del elemnto a editar
    },

    storeEdit: (req,res)=>{

        let errors = validationResult(req);

        if (errors.isEmpty()) {

        let event = productController.readFile();
        req.body.id= parseInt(req.params.id);
        req.body.image= req.file ? req.file.filename : req.body.oldimage 

        let eventUpdated = event.map(elemento => {
           if (elemento.id == req.body.id){
               return elemento=req.body
           }
           return elemento
        })

        let eventJASON = JSON.stringify(eventUpdated, null, ' ');                                           //Transformo en Json
        fs.writeFileSync(productController.filePath , eventJASON); 
     
        res.redirect("/productDetail");
        } else{
            res.render('event-create-form', { errors: errors.array(), old: req.body })
        }
    },

    remove: (req,res)=>{
        let event = productController.readFile();
        let indice= parseInt(req.params.id);
        let newEvent=event.filter(elemento => (elemento.id != indice));  
       
        let eventJASON = JSON.stringify(newEvent, null, ' ');                                           //Transformo en Json
        fs.writeFileSync(productController.filePath , eventJASON);  

        res.redirect('/')
    }

    
}
module.exports=productController;