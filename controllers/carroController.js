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

    confirm: (req,res)=>{

        db.Sale.create({
            date: date.now(),
            event_id: parseInt(req.body.price),
            user_id: parseInt(req.body.stock),
            quantity: req.body.date,
            total: req.body.address,
        })




        res.render('carroDeCompras')
    }


}


module.exports=carroController