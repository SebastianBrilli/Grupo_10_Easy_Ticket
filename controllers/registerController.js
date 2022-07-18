let fs = require('fs');
const path = require('path');
const users=require('../models/Users.js')
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');

const registerController = {

    list: (req, res) => {

        let usersList = users.readFile();
        res.render('userIndex', { users: usersList })
    },

    detail: (req, res) => {
                                            
        let selectedUser=users.findByPk(req.params.id)
        res.render('userDetail', { selectedUser })                                                            //Renderizo la vista de detalle del procuto pasando los datos como parametros
    },

    showCreate: (req, res) => {

        res.render('user-create-form')
    },

    storeCreate: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            let userInDB = users.findByField('email', req.body.email)

            if (!userInDB) {

                let newUser={
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10),
                    image: req.file ? req.file.filename: 'default.png'
                    };

                let newUserCreated=users.create(newUser)
                res.render('userDetail', { user: newUserCreated });

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

            res.render('user-create-form', { errors: errors.array(), old: req.body })
        }

    },

    showEdit: (req, res) => {

        let selectedUser=users.findByPk(req.params.id)
        console.log(selectedUser)
        res.render("user-edit-form", { user: selectedUser });                     //Renderizo la vista enviando los datos del elemnto a editar
    },

    storeEdit: (req, res) => {

        let errors = validationResult(req)

        req.body.id = parseInt(req.params.id);
        req.body.image = req.file ? req.file.filename : req.body.oldimage

        if (errors.isEmpty()) {

                users.edit(req.body)
                res.redirect("/");

        } else {
            res.render('user-edit-form', { errors: errors.array(), user: req.body })
        }
    },

    remove: (req, res) => {

        users.delete(req.params.id)
        res.redirect('/')
    }
}

module.exports = registerController;