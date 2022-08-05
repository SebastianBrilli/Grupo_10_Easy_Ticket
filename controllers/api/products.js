let db = require('../../database/models')

const productApiController = {

    list: (req, res) => {
        db.Event.findAll()
            .then(events => {
                return res.json( {
                    count: events.length,
                    countByCategory: "",
                    products: events
                })
            })
          
    },
    detail: (req, res) => {
        db.Event.findByPk(req.params.id)
            .then(event => {
                return res.json({
                    data: event,
                    image: ""
                })
            })
    }

}


module.exports = productApiController