const knex = require("../db/knex.js");

module.exports = {

  create: function(req, res){
    knex('members')
      .insert({
        company_id: req.params.co_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        position: req.body.position
      })
      .then(()=>{
        res.redirect(`/company/${req.params.co_id}`);
      })
  }

}
