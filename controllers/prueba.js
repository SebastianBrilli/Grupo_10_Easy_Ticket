const fs = require('fs');
const path = require('path');
//const filePath= path.join(__dirname, '../data/eventDataBase.json');

const prueba = {
    filePath: path.join(__dirname, '../data/eventDataBase.json'),

    readFile: () => {
        return JSON.parse(fs.readFileSync(prueba.filePath, 'utf-8'));  
    },

    findAll: () => {
        return prueba.readFile();
    },

    findByPk: (id) => {
    let data=prueba.findAll();
    let selectedItem=data.find(element => element.id===id);
    return selectedItem;
   },

   findByField: (field, value) => {
    let data=prueba.findAll();
    let selectedItem=data.find(element => element[field]===value);
    return selectedItem;
   },
    
   create: (newItem)=>{
    let data=prueba.findAll();
    data.push(newItem);
    let dataJASON = JSON.stringify(data);     //Transformo en Json
    fs.writeFileSync(prueba.filePath, dataJASON); 
    return true

   }
}

console.log(prueba.readFile())
