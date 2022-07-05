let fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');

const registerController = {
    filePath: path.join(__dirname, '../data/userDataBase.json'),

    readFile: () => {
        return JSON.parse(fs.readFileSync(registerController.filePath, 'utf-8'))
    },

    generateID: () => {
        let items = registerController.readFile();
        let lastItem = items.pop();
        if (lastItem) {
            return lastItem.id + 1
        }
        return 1
    },

    list: (req, res) => {
        let users = registerController.readFile();
        res.render('userIndex', { users })
    },

    create: (req, res) => {

        res.render('user-create-form')
    },

    detail: (req, res) => {
        let users = registerController.readFile();
        let idSelected = req.params.id; 										                                                         //Traigo el parametro del producto
        let selectedUser = users.find(elemento => elemento.id == idSelected);                                                       //Selecciono el evento del array

        res.render('userDetail', { selectedUser })                                                            //Renderizo la vista de detalle del procuto pasando los datos como parametros
    },

    storeNew: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let users = registerController.readFile();
            let newId = parseInt(registerController.generateID());

            let new_user = {                                              //Defino el nuevo evento a guardar en el archivo
                id: newId,                                               //Incremento en 1 el valor del ID
                first_name: req.body.first_name,                         //Recupero los valores recibitos del formulario y los asigno al correpondiente elemento del OL
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category: req.body.category,
                image: req.file.filename,
            }

            users.push(new_user);                                           //Guardo el nuevo elemento en la ultima posicion del array de OL
            let usersJASON = JSON.stringify(users, null, ' ');
            fs.writeFileSync(registerController.filePath, usersJASON);
            res.render('userDetail', { user: new_user });
        } else {
            res.render('user-create-form', { errors: errors.array(), old: req.body })
        }

    },

    edit: (req, res) => {
        let users = registerController.readFile();
        let selectedId = req.params.id;                                          //Tomo el valor del Id recibido del usuario a traves de params
        let selectedUser = users.find(elemento => elemento.id == selectedId);

        res.render("user-edit-form", { user: selectedUser });                     //Renderizo la vista enviando los datos del elemnto a editar
    },

    storeEdit: (req, res) => {

        let errors = validationResult(req)

        req.body.id = parseInt(req.params.id);
        req.body.image = req.file ? req.file.filename : req.body.oldimage

        if (errors.isEmpty()) {
            let users = registerController.readFile();


            let userUpdated = users.map(elemento => {
                if (elemento.id == req.body.id) {
                    return elemento = req.body
                }
                return elemento
            })

            let usersJASON = JSON.stringify(userUpdated, null, ' ');                                           //Transformo en Json
            fs.writeFileSync(registerController.filePath, usersJASON);

            res.redirect("/");
        } else {
            res.render('user-edit-form', { errors: errors.array(), user: req.body })
        }
    },

    remove: (req, res) => {
        let users = registerController.readFile();
        let indice = parseInt(req.params.id); {

        }
        let newUsers = users.filter(elemento => (elemento.id != indice));

        let newUsersJASON = JSON.stringify(newUsers, null, ' ');                                           //Transformo en Json
        fs.writeFileSync(registerController.filePath, newUsersJASON);

        res.redirect('/')
    }
}

module.exports = registerController;