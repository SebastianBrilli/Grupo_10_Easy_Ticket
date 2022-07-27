const users = require('../models/Users.js')

function userLoggedMiddleware(req, res, next) {

   res.locals.isLogged = false;

   let emailInCookie = req.cookies.userEmail
   let userFromCookie = users.findByField('email', emailInCookie)


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