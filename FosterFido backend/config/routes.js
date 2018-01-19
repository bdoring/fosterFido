const users = require("../controllers/users.js");
module.exports = function(app){

  app.post('/users/login', users.check);

  app.post('/users/register', users.register);

  app.patch('/users/update', users.update);

  app.delete('/users/delete/:id', users.delete);

};
