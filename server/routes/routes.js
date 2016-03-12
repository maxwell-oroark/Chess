var ctrls = require("../controllers/controllers.js")
var jwt = require("jsonwebtoken")
var secret = "catzpajamas"

var apiRouter = require('express').Router()


apiRouter.route("/signup")
  .post(ctrls.userController.create)

apiRouter.route("/login")
  .post(ctrls.userController.login)

apiRouter.use(function(req,res,next){
  var token = req.body.token || req.params.token || req.headers["x-access-token"]
  if (token) {
    jwt.verify(token, secret, function(err, decodedToken){
      if (err) throw err;
      req.decodedToken = decodedToken
      next()
    })
  }
  //can do error handling with no tokens
  else {
    res.json({message : "no token found, please sign in"})
  }
})
//This route below gives intimate details of the person logged in.
apiRouter.route("/me")
  .get( function(req, res){
  res.send(req.decodedToken)
})
//This route below gives intimate details of all users in the user database
apiRouter.route("/users")
  .get(ctrls.userController.all)
//This route below will feebly try to create a game and add it to the mongoDB database, may god have mercy on our souls.
apiRouter.route("/games")
  .post(ctrls.gameController.create)

module.exports = apiRouter
