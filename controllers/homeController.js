let fs = require('fs');
const path = require('path');

const eventFilePath = path.join(__dirname, '../data/eventDataBase.json');
const event = JSON.parse(fs.readFileSync(eventFilePath, 'utf-8'));



const homeController={

    index: (req,res)=>{
        const buenosAires = event.filter(elemento => elemento.category === 'Buenos Aires');
        const cordoba = event.filter(elemento => elemento.category === 'Cordoba');
        const rosario = event.filter(elemento => elemento.category === 'Rosario');
        const otrasProvincias = event.filter(elemento => elemento.category === 'Otras Provincias');
		

    res.render("home",{buenosAires,cordoba,rosario,otrasProvincias})
    }

}

module.exports=homeController