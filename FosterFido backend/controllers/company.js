const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('companies').then((companyList)=>{


      if(req.session.admin){
          knex('admin')
            .where('id', req.session.admin)
            .then((result)=>{
              let logged_user = result[0]

              res.render('index', {companies: companyList, user: logged_user});
            })

      }else{
        knex('users')
          .where('id', req.session.user)
          .then((result)=>{
            let logged_user = result[0]

            res.render('index', {companies: companyList, user: logged_user});
          })
      }
    })

  },

  create: function(req, res){
    knex('companies')
      .insert({
        name: req.body.name,
        description: req.body.description,
        suite: req.body.suite
      }, '*')
      .then((result)=>{
        res.redirect('/');
      })
  },

  getOne: function(req, res){
    knex('companies')
      .where('id', req.params.id)
      .then((company)=>{

        knex('members')
          .where('company_id', req.params.id)
          .then((memberList)=>{


            res.render('profile', {com: company[0], members: memberList});

          })

      });
  }
}
