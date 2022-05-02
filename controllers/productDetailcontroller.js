let fs = require('fs');
const path = require('path');
const { brotliDecompressSync } = require('zlib');

const eventFilePath = path.join(__dirname, '../data/eventDataBase.json');
const event = JSON.parse(fs.readFileSync(eventFilePath, 'utf-8'));

const productDetailController= { 
    index: (req,res)=>{
        res.render('productIndex', {event})

    },

    create: (req,res)=>{
        res.render('event-create-form')
    },

    detail: (req,res)=>{
        let indice=req.params.id; 										//traigo el parametro del producto
        let selectedEvent = event.find(elemento => elemento.id == indice);
        let recomendedEvent = event.filter(elemento=> (elemento.category==selectedEvent.category)&&(elemento.id!=indice));      
        res.render('productDetail', {selectedEvent, recomendedEvent})
    },

    storeNew: (req,res)=>{

        let new_event ={ 
        id: (event.length+1),
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        date: req.body.date,
        address: req.body.address,
        city: req.body.city,
        category: req.body.category,
        description: req.body.description,
        }

        event.push(new_event);
        let eventJASON = JSON.stringify(event);
        fs.writeFileSync(eventFilePath,eventJASON);

        res.redirect("/productDetail");
    },

    edit: (req,res)=>{
        let indice= req.params.id;
        
        
        let selectedEvent = event.find(elemento => elemento.id == indice);

        res.render("event-edit-form", {selectedEvent});
    },

    storeEdit: (req,res)=>{
        
        let indice= (req.params.id-1);
        
        event[indice].name= req.body.name;
        event[indice].price= req.body.price;
        event[indice].discount= req.body.discount;
        event[indice].date= req.body.date;
        event[indice].address= req.body.address;
        event[indice].city= req.body.city;
        event[indice].category= req.body.category;
        event[indice].description= req.body.description;

        console.log(event[indice])

        let eventJASON = JSON.stringify(event);
        fs.writeFileSync(eventFilePath,eventJASON);
        res.redirect("/productDetail");

    }
 
    
}
module.exports=productDetailController;