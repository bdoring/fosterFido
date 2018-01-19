const knex = require('../db/knex.js');
const encryption = require('../config/encryption.js')

module.exports = {
  register: function(req, res){
    // send req.body to be encrypted
    console.log("req.body:", req.body)
    encryption.hash(req.body).then((encryptedUser)=>{
      // take the encrypted user and insert them into the db.
      knex('users')
        .insert(encryptedUser, '*')
        .then((newUser)=>{
          res.send(newUser[0]);
        })
        .catch((err)=>{
          res.send("ERROR", err);
        });
    })
  },
  check: function(req, res){
    knex('users')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];
        if (user) {
          encryption.check(user, req.body).then((isValid)=>{
            console.log(isValid);
            if(isValid){
              console.log("account found");
              console.log(user);
              res.send(user);
            }else{
              console.log("account not found");
              res.send("Account Not Found");
            }
          })
        } else {
          res.send("Account Not Found");
        }
      })
      .catch((err)=>{
        console.log("CAUGHT!");
      })
  },
  update: function(req, res) {
    let updatedUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      zipcode: req.body.zipcode,
      email: req.body.email,
    }
    knex('users')
      .update(updatedUser, '*')
      .where('id', req.body.id)
      .then((user) => {
        console.log("updated user", user);
        res.send(user[0]);
      })
      .catch(err => {
        res.send(err);
      })
  },
  delete: function (req, res) {
    console.log("Deleting USER...", req.body)
    knex('users')
      .where('id', req.params.id)
      .delete()
      .then(() => {
        res.send('User deleted successfully.')
      })
      .catch(err => {
        res.send(err);
      })
  }
}
