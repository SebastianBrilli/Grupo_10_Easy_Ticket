let db = require('../../database/models')

const saleApiController = {

    list: (req, res) => {

        db.Sale.findAll()
            .then(sales => {

            return res.json({
                count: sales.length,
                sales: sales,
                                     
               })   
            })
    }

}


module.exports = saleApiController