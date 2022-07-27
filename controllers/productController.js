const { localsName } = require('ejs');
let fs = require('fs');
const { Op } = require("sequelize")

let db = require('../database/models')

const { validationResult } = require('express-validator');

const productController = {

    list: (req, res) => {
        db.Event.findAll()
            .then(events => {
                return res.render('eventIndex', { event: events })
            })
            .catch(e => console.log(e))
    },

    index: (req, res) => {
        db.Event.findAll()
            .then(events => {
                return res.render('productIndex', { event: events })
            })
            .catch(e => console.log(e))

    },

    detail: (req, res) => {

        let selectedEvent = db.Event.findByPk(req.params.id)
        let recomendedEvent = db.Event.findByPk(req.params.id)
            .then((event) => {
                return db.Event.findAll({
                    where: {
                        category_id: event.category_id,
                        id: {
                            [Op.ne]: event.id
                        }
                    }
                })
            })

        Promise.all([selectedEvent, recomendedEvent])
            .then(([selectedEvent, recomendedEvent]) => {
                return res.render('productDetail', { selectedEvent, recomendedEvent });

            })
            .catch(e => console.log(e))

    },

    create: (req, res) => {
        db.CategoryEvent.findAll()
            .then(categorias => {

                return res.render('event-create-form', { categorias })
            })
            .catch(e => console.log(e))

    },

    storeNew: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.Event.create({
                name: req.body.name,
                price: parseInt(req.body.price),
                stock: parseInt(req.body.stock),
                date: req.body.date,
                address: req.body.address,
                city: req.body.city,
                category_id: req.body.category_id,
                image: req.file ? req.file.filename : 'LOGO_AMARILLO_FINAL.png',
                video: req.body.video,
                description: req.body.description,
            })

            res.redirect("/events");

        } else {

            db.CategoryEvent.findAll()
                .then(categorias => {

                    return res.render('event-create-form', { errors: errors.array(), categorias, old: req.body })

                })
                .catch(e => console.log(e))

        }

    },

    edit: (req, res) => {

        let eventRequest = db.Event.findByPk(req.params.id)
        let categoryRequest = db.CategoryEvent.findAll()
        Promise.all([eventRequest, categoryRequest])
            .then(([selectedEvent, categorias]) => {
                return res.render("event-edit-form", { selectedEvent, categorias });

            })
            .catch(e => console.log(e))

    },

    storeEdit: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            db.Event.update({
                name: req.body.name,
                price: parseInt(req.body.price),
                stock: parseInt(req.body.stock),
                date: req.body.date,
                address: req.body.address,
                city: req.body.city,
                category_id: req.body.category_id,
                image: req.file ? req.file.filename : req.body.oldimage,
                video: req.body.video,
                descrption: req.body.description,
            }, {
                where: {
                    id: req.params.id
                }
            })

            //users.edit(req.body)
            res.redirect('/events');

        } else {

            let eventRequest = db.Event.findByPk(req.params.id)
            let categoryRequest = db.CategoryEvent.findAll()
            Promise.all([eventRequest, categoryRequest])
                .then(([selectedEvent, categorias]) => {
                    return res.render('event-edit-form', { errors: errors.array(), selectedEvent, categorias })
                })
                .catch(e => console.log(e))
        }

    },

    remove: (req, res) => {

        db.Event.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')

    }


}
module.exports = productController;