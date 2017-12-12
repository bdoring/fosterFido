const knex = require('../db/knex.js');

module.exports = {
  login: function(req, res){
    res.render('login');
  },
  check: function(req, res){
    knex('admin')
      .where('username', req.body.username)
      .then((result)=>{
        let admin = result[0];
        if(admin.password === req.body.password){
          req.session.admin = admin.id;
          res.redirect('/');
        }else{
          res.redirect('/login');
        }
      })
  }
}
