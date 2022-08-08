let db = require('../../database/models')

const productApiController = {

    list: (req, res) => {

        let events=db.Event.findAll()
        let categories= db.CategoryEvent.findAll()

        Promise.all([events, categories])
        .then(([eventos, categorias]) => {
            
            let cuentaEventos=''
            let cantPorCategoria=[{}]  
            

            for (let i=0;i<categorias.length;i++){
            cuentaEventos=0
            
            for (let j=0; j<eventos.length;j++){
            
            if(eventos[j].dataValues.category_id === categorias[i].dataValues.id){
            cuentaEventos++
            }
            cantPorCategoria[i]={
                name: categorias[i].dataValues.category,
                quantity: cuentaEventos
            }

            }
            }

                return res.json( {
                    count: eventos.length,
                    countByCategory: cantPorCategoria,
                    products: eventos,
                    
                })
            })
          
    },
    detail: (req, res) => {
        db.Event.findByPk(req.params.id)
            .then(event => {
                return res.json({
                    data:{
                        id:event.id,
                        name:event.name,
                        description:event.description,
                        detail:"http://localhost:3000/api/products/image/" + event.id
                    }
                })
            })
    },
    showImage:(req, res) => {
        db.Event.findByPk(req.params.id)
        .then(event => { 
            return res.render('eventImage', {event})
        })
    }

}


module.exports = productApiController