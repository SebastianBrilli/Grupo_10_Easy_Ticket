let db = require('../../database/models')
const sequelize = db.sequelize

const { body } = require('express-validator');
const { selectFields } = require('express-validator/src/select-fields');


const userApiController = {

    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                let respuesta = {
                    count: users.length,
                    users: users      
                }
                res.json(respuesta)
            })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                return res.json({
                    data: user,
                    image: ""
                })
            })
    },  
}


module.exports = userApiController