
const bcrypt = require('bcrypt');
let db = require('../database/models')

const loginController = {
    login: (req, res) => {

        res.render('login')
    },

    loginProcess: async (req, res) => {

        let userToLogin = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (userToLogin) {

            let isOkPass = bcrypt.compareSync(req.body.password, userToLogin.password)

            if (isOkPass) {
                delete userToLogin.password
                req.session.userLogged = userToLogin

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                }

                res.redirect('/')
            } else {

                res.render('login', {
                    errors: {
                        email: {
                            msg: 'Password Invalida'
                        }
                    }
                })

            }

        } else {

            res.render('login', {
                errors: {
                    email: {
                        msg: 'Email Invalido'
                    }
                }
            })
        }

    },

    logOut: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        res.redirect('/')
    }

}

module.exports = loginController;