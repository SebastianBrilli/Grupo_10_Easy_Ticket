let fs = require('fs');
const path = require('path');

const Users = {
    
    filePath: path.join(__dirname, '../data/userDataBase.json'),

    readFile: () => {
        return JSON.parse(fs.readFileSync(Users.filePath, 'utf-8'))
    },

    generateID: () => {
        let items = Users.readFile();
        let lastItem = items.pop();
        if (lastItem) {
            return lastItem.id + 1;
        }
        return 1;
    },

    findByPk: (id) => {
        let allUsers= Users.readFile();
        let userFound= allUsers.find(user=>user.id==id);
        return userFound
    },

    findByField: (field, text) => {
        let allUsers= Users.readFile();
        let userFound= allUsers.find(user=>user[field]===text);
        return userFound;
     },

    create: (userData) => {
        
        let allUsers= Users.readFile();
       
        newUser={
            id: parseInt(Users.generateID()),
            ...userData,
            };

        allUsers.push(newUser)
        fs.writeFileSync(Users.filePath, JSON.stringify(allUsers, null, ' '));
        return newUser
        },

    edit: (userData) => {
        
        let allUsers= Users.readFile();

        let userUpdated = allUsers.map(elemento => {
            if (elemento.id == userData.id) {
                return elemento = userData
            }
            return elemento
        })
       
        fs.writeFileSync(Users.filePath, JSON.stringify(userUpdated , null, ' '));
        return
        },


    delete: (id)=>{
        let allUsers= Users.readFile();
        let finalUsers=allUsers.filter(user=> user.id!=id)
        fs.writeFileSync(Users.filePath, JSON.stringify(finalUsers, null, ' '));
        return

        },

}


module.exports = Users;