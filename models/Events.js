let fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const Events = {
    
    filePath: path.join(__dirname, '../data/eventDataBase.json'),

    readFile: () => {
        return JSON.parse(fs.readFileSync(Events.filePath, 'utf-8'))
    },

    generateID: () => {
        let items = Events.readFile();
        let lastItem = items.pop();
        if (lastItem) {
            return lastItem.id + 1;
        }
        return 1;
    },

    findByPk: (id) => {
        let allEvents= Events.readFile();
        let eventFound= allEvents.find(event=>event.id==id);
        return eventFound
    },

    findByField: (field, text) => {
        let allEvents= Events.readFile();
        let eventFound= allEvents.find(event=>event[field]===text);
        return eventFound;
     },

     filterByField: (category, id) => {
        
        let allEvents= Events.readFile();
        let recomendedEvent = allEvents.filter(elemento=> (elemento.category==category)&&(elemento.id!=id));

        return recomendedEvent;
     },

    create: (eventData) => {
        
        let allEvents= Events.readFile();
       
        newEvent={
            id: parseInt(Events.generateID()),
            ...eventData,
            };

        allEvents.push(newEvent)
        fs.writeFileSync(Events.filePath, JSON.stringify(allEvents, null, ' '));
        return newEvent
        },

    edit: (eventData) => {
        
        let allEvents= Events.readFile();

        let eventUpdated = allEvents.map(elemento => {
            if (elemento.id == eventData.id) {
                return elemento = eventData
            }
            return elemento
        })
       
        fs.writeFileSync(Events.filePath, JSON.stringify(eventUpdated , null, ' '));
        return
        },


    delete: (id)=>{
        let allEvents= Events.readFile();
        let finalEvents=allEvents.filter(event=> event.id!=id)
        fs.writeFileSync(Events.filePath, JSON.stringify(finalEvents, null, ' '));
        return

        },

}


module.exports = Events;