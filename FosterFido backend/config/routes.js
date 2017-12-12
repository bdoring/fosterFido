//Update the name of the controller below and rename the file.
const company = require("../controllers/company.js");
const member = require("../controllers/member.js");
const admin = require("../controllers/admin.js");
const users = require("../controllers/users.js");
module.exports = function(app){

  // app.get('/users/login', users.login);

  app.post('/users/login', users.check);

  app.post('/users/register', users.register);

  app.patch('/users/update', users.update);

  app.delete('/users/delete/:id', users.delete);


  // app.get('/login', admin.login);
  //
  // app.post('/login', admin.check);

  //everything below this is protected
  // app.use(userAuth);
  //
  // app.get('/', company.index);
  //
  // app.get('/company/:id', company.getOne);
  //
  // app.use(adminAuth);
  //
  // app.post('/member/:co_id', member.create);
  //
  // app.post('/company', company.create);
}

// function userAuth(req, res, next){
//   if(req.session.user || req.session.admin){
//     next();
//   }else{
//     res.redirect("/users/login")
//   }
// }
//
// function adminAuth(req,res,next){
//   if(req.session.admin){
//     next();
//   }else{
//     res.redirect('/login');
//   }
// }
