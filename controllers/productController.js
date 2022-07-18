const { localsName } = require('ejs');
let fs = require('fs');
const path = require('path');
const events=require('../models/Events.js')

const { validationResult } = require('express-validator');

const productController = {

    // filePath: path.join(__dirname, '../data/eventDataBase.json'),
    
    // readFile: () => { 
    //     return JSON.parse(fs.readFileSync(productController.filePath, 'utf-8'))  
    // },

    // generateID: ()=>{
    //     let items = productController.readFile();
    //     let lastItem= items.pop();
    //     if(lastItem){
    //         return lastItem.id + 1
    //     }
    //     return 1
    // },

    list: (req, res) => {
        let eventList = events.readFile();
        res.render('eventIndex', { event: eventList })
    },

    index: (req,res)=>{
        let eventList = events.readFile();
        res.render('productIndex', {event: eventList})
    },

    create: (req,res)=>{
        res.render('event-create-form')
    },

    detail: (req,res)=>{

        let eventList = events.readFile();

        let selectedEvent= events.findByPk(req.params.id)
        let recomendedEvent= events.filterByField(selectedEvent.category, selectedEvent.id)
        res.render('productDetail', {selectedEvent, recomendedEvent})  

    //     let event = productController.readFile();
    //     let idSelected=req.params.id; 										                                                         //Traigo el parametro del producto
    //     let selectedEvent = event.find(elemento => elemento.id == idSelected);                                                       //Selecciono el evento del array
    //    let recomendedEvent = event.filter(elemento=> (elemento.category==selectedEvent.category)&&(elemento.id!=idSelected));        //Selecciono otros elementos que tengan la misma categoria    
        
                                                          //Renderizo la vista de detalle del procuto pasando los datos como parametros
    },

    storeNew: (req,res)=>{

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let new_event ={                            //Defino el nuevo evento a guardar en el archivo
                                 // Incremento en 1 el valor del ID
                name: req.body.name,                        //Recupero los valores recibitos del formulario y los asigno al correpondiente elemento del OL
                price: parseInt(req.body.price),
                discount: parseInt(req.body.discount),
                date: req.body.date,
                address: req.body.address,
                city: req.body.city,
                category: req.body.category,
                image:req.file ? req.file.filename : 'LOGO_AMARILLO_FINAL.png' ,
                description: req.body.description,
                }

            events.create(new_event)
            res.redirect("/events");
        } else {
            res.render('event-create-form', { errors: errors.array(), old: req.body })
        }

        // let event = productController.readFile();
        // let newId= parseInt(productController.generateID());                               

        // let new_event ={                            //Defino el nuevo evento a guardar en el archivo
        // id: newId,                                  // Incremento en 1 el valor del ID
        // name: req.body.name,                        //Recupero los valores recibitos del formulario y los asigno al correpondiente elemento del OL
        // price: parseInt(req.body.price),
        // discount: parseInt(req.body.discount),
        // date: req.body.date,
        // address: req.body.address,
        // city: req.body.city,
        // category: req.body.category,
        // image:req.file ? req.file.filename : '' ,
        // description: req.body.description,
        // }

        // event.push(new_event);                                                          //Guardo el nuevo elemento en la ultima posicion del array de OL
        // let eventJASON = JSON.stringify(event, null, ' ');                                           //Transformo en Json
        // fs.writeFileSync(productController.filePath , eventJASON);     //Guardo el resultado en el archivo de texto
                                                        
    },

    edit: (req,res)=>{
        
        let selectedEvent= events.findByPk(req.params.id);
        res.render("event-edit-form", {selectedEvent}); 
        
        // let event = productController.readFile();
        // let selectedId= req.params.id;                                          //Tomo el valor del Id recibido del usuario a traves de params
        // let selectedEvent = event.find(elemento => elemento.id == selectedId);

    },

    storeEdit: (req,res)=>{

        let errors = validationResult(req);

        req.body.id= parseInt(req.params.id);
        req.body.image= req.file ? req.file.filename : req.body.oldimage 

        if (errors.isEmpty()) {

            events.edit(req.body)
            res.redirect("/events");
        } else{
            res.render('event-create-form', { errors: errors.array(), old: req.body })
        }

        // let event = productController.readFile();
        // req.body.id= parseInt(req.params.id);
        // req.body.image= req.file ? req.file.filename : req.body.oldimage 

        // let eventUpdated = event.map(elemento => {
        //    if (elemento.id == req.body.id){
        //        return elemento=req.body
        //    }
        //    return elemento
        // })

        // let eventJASON = JSON.stringify(eventUpdated, null, ' ');                                           //Transformo en Json
        // fs.writeFileSync(productController.filePath , eventJASON); 
     


    },

    remove: (req,res)=>{
        
        events.delete(req.params.id)
        res.redirect('/')
        // let event = productController.readFile();
        // let indice= parseInt(req.params.id);
        // let newEvent=event.filter(elemento => (elemento.id != indice));  
       
        // let eventJASON = JSON.stringify(newEvent, null, ' ');                                           //Transformo en Json
        // fs.writeFileSync(productController.filePath , eventJASON);  

    }

    
}
module.exports=productController;