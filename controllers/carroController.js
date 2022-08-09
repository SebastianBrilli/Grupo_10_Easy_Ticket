const session = require('express-session')
let db = require('../database/models')

const carroController={
    carro: (req,res)=>{
        res.render('carroDeCompras')
    },

    show: (req,res)=>{

        let eventRequest = db.Event.findByPk(req.params.id)
        let categoryRequest = db.CategoryEvent.findAll()
        Promise.all([eventRequest, categoryRequest])
            .then(([selectedEvent, categorias]) => {
                return res.render("carroDeCompras", { selectedEvent, categorias });

            })
            .catch(e => console.log(e))
    },

    confirm: async (req,res)=>{

        let confirmedEvent = await db.Event.findByPk(req.params.id)
        let date = new Date();


        let sale = await db.Sale.create({

            date: date.toISOString().split('T')[0],
            event_id: confirmedEvent.id,
            user_id: req.session.userLogged.id,
            quantity: parseInt(req.body.quantity),
            total: (confirmedEvent.price * parseInt(req.body.quantity)),
        })

        res.render('event-confirmed', {selectedEvent: confirmedEvent, user: req.session.userLogged, sale:sale})
    }

}

module.exports=carroController