let fs = require('fs');
const bcrypt = require('bcrypt');

let db = require('../database/models')

const { validationResult } = require('express-validator');

const registerController = {

    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                return res.render('userIndex', { users })
            })
            .catch(e => console.log(e))

    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                return res.render('userDetail', { selectedUser: user })
            })
            .catch(e => console.log(e))
    },

    showCreate: (req, res) => {
        db.CategoryUser.findAll()
            .then(categorias => {
                return res.render('user-create-form', { categorias })
            })
            .catch(e => console.log(e))
    },

    storeCreate: async (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            let newUser = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (!newUser) {

                let userCreated = await db.User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    category_id: req.body.category_id,
                    image: req.file ? req.file.filename : 'default.png',
                })
                return res.render('userDetail', { user: userCreated });

            } else {

                res.render('user-create-form', {
                    errors: {
                        email: {
                            msg: 'Mail repetido'
                        }
                    },
                    old: req.body
                })
            }

        } else {
            db.CategoryUser.findAll()
                .then(categorias => {
                    return res.render('user-create-form', { errors: errors.array(), categorias, old: req.body })
                })
                .catch(e => console.log(e))
        }
    },

    showEdit: (req, res) => {

        let userRequest = db.User.findByPk(req.params.id)
        let categoryRequest = db.CategoryUser.findAll()
        Promise.all([userRequest, categoryRequest])
            .then(([user, categorias]) => {
                return res.render("user-edit-form", { user, categorias });

            })
            .catch(e => console.log(e))

    },

    storeEdit: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            db.User.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                category_id: req.body.category_id,
                image: req.file ? req.file.filename : req.body.oldimage,
            }, {
                where: {
                    id: req.params.id
                }
            })

            res.redirect('/');

        } else {

            let userRequest = db.User.findByPk(req.params.id)
            let categoryRequest = db.CategoryUser.findAll()
            Promise.all([userRequest, categoryRequest])
                .then(([user, categorias]) => {
                    return res.render('user-edit-form', { errors: errors.array(), user, categorias })
                })
                .catch(e => console.log(e))
        }
    },

    remove: (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
}

module.exports = registerController;