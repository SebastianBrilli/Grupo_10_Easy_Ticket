let db = require('../../database/models')
const sequelize = db.sequelize

const { body } = require('express-validator');
const { selectFields } = require('express-validator/src/select-fields');



const userApiController = {

    list: (req, res) => {
        db.User.findAll()
            .then(users => {



            // let usuarios = users.forEach(element => {
            //                     delete element.dataValues.pasword
            //                     delete element.dataValues.category_id   
            //                     return 
            //                     });
            // console.log(usuarios)

            return res.json({
                count: users.length,
                users: users,
                                     
               })   
            })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {                

                return res.json({
                    data: {
                        Id: user.id,
                        Nombre: user.first_name,
                        Apellido: user.last_name,
                        email: user.email
                    },
                    image: "http://localhost:3000/api/users/image/" + user.id
                })
            })
    }, 
    
    showImage: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => { 
            return res.render('userImage', {user})
        })
    }
}


module.exports = userApiController