
let db = require('../database/models')

const homeController = {

    index: (req, res) => {

        let eventRequest = db.Event.findAll()
        let categoryRequest = db.CategoryEvent.findAll()
        Promise.all([eventRequest, categoryRequest])
            .then(([event, category]) => {
                return res.render("home", { event, category });

            })
            .catch(e => console.log(e))

    }

}

module.exports = homeController