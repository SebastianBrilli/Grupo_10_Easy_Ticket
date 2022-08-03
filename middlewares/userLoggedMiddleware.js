const users = require('../models/Users.js')
let db = require('../database/models')

async function userLoggedMiddleware(req, res, next) {

   res.locals.isLogged = false;

   let emailInCookie = req.cookies.userEmail

   // if (!emailInCookie){
   //    emailInCookie=null
   // }

   let userFromCookie = await db.User.findOne({
      where: {
          email: emailInCookie ? emailInCookie : null ,
      }
  })


   if (userFromCookie) {
      delete userFromCookie.password
      req.session.userLogged = userFromCookie
   }


   if (req.session && req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged
   }
   next();


}
module.exports = userLoggedMiddleware;