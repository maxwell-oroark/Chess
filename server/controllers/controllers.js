var db = require('../models/models.js'), jwt = require('jsonwebtoken');

module.exports = {
  userController : {
    create : function(req, res){
      if(req.body){
        var user = new db.User(req.body)
        var token = jwt.sign({name : user.name, admin : user.admin}, "catzpajamas", {expiresInMinutes : 52000})
        user.save(function(err){
          if (err) throw err;
          res.json({token : token, message: "User Created!", success : true})
        })
      }
    },
    login : function(req, res){
      db.User.findOne({username: req.body.username}, function(err, user){
        if (user){
          // var x = setTimeout(function(){
          console.log(user)
          console.log(user._id)
          if (user.authenticate(req.body.password)){
              var token = jwt.sign({name : user.name, id : user._id, username : user.username, admin : user.admin}, "catzpajamas", {expiresInMinutes : 52000})
              res.json({token : token, message : "valid user", success: true})
            } else {
            res.json({message : "error, wrong credentials."})
            }
        // },1000)
        }
      })
    },
    all : function(req, res){
      db.User.find({}, function(err, users){
        res.json(users)
      })
    },

  },
  gameController : {
    create : function(req, res){
      console.log("req.body:", req.body)
      var game = new db.Game({
        players : req.body.id,
        moves   : ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR']
      })

      game.save(function(err){
        if (err) throw err
        res.json({messsage : "success, game created", game : game})
      })
    }
  }
}
