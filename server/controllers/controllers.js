var db = require('../models/models.js'), jwt = require('jsonwebtoken');

module.exports = {
  userController : {
    create : function(req, res){
      if(req.body){
        var user = new db.User(req.body)
        user.save(function(err){
          if (err) throw err;
          res.json({message: "User Created!", success : true})
        })
      }
    },
    login : function(req, res){
      db.User.findOne({username: req.body.username}, function(err, user){
        if (user){
          if (user.authenticate(req.body.password)){
            var token = jwt.sign({name : user.name, admin : user.admin}, "catzpajamas", {expiresInMinutes : 52000})
            res.json({token : token, message : "valid user"})

          } else {
            res.send("error!")
          }
        }
      })
    },
    all : function(req, res){
      db.User.find({}, function(err, users){
        res.json(users)
      })
    },

  }
}
