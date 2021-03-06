angular.module("chess")
  .controller("main-controller", function($rootScope, $http, $scope, $location, Auth, $interval){
    $scope.loggedIn = Auth.isLoggedIn()
    $rootScope.$on("$routeChangeStart", function(){
      // console.log("changing route scope");
      $scope.loggedIn = Auth.isLoggedIn()
      Auth.getUser()
        .then(function(user){
          $scope.user = user.data
        })
    })
    $scope.login = function(){
      Auth.login($scope.loginForm.username, $scope.loginForm.password)
      .then(function(data){
        if (data.success){$location.path('/home')}
        else {
          $scope.errormsg = data.message
        }
      })
    }
    $scope.logout = function(){
      console.log('loggin out')
      Auth.logout()
      $scope.user = ''
      $location.path('/')
    }

    //Angular routing on SIGN UP.  Maybe need to add authentication of correct username and password
    $scope.signup = function(){
          $http({
              method : 'POST',
              url    : '/api/signup',
              data   : $scope.signupForm
          }).then(function(returnData){
              console.log(returnData)
              // This part below is never running because I am not sending back any data with tokens in it.
              if ( returnData.data) {
								$scope.userCreated = true;
                console.log("user created")
							 }

          })
      }
      console.log($scope.user)

      //This will be moved after a while into a new controller but for now the stuff below will define creating a new game for the dashboard.
      $scope.publicGames = []


      var populatePublic = function(game){
        $scope.game = game
        $scope.publicGames.push($scope.game)
      }

      $scope.emptyBoard = function(){
        $location.path('/board')
      }

      $scope.newGame = function(){
        $http({
          method : 'POST',
          url    : '/api/games',
          data   : {
            id : $scope.user.id
          }
        }).then(function(response){
          populatePublic(response.data.game)
          console.log($scope.publicGames)
        })
      }
      //This (hopefully) routes the user to an empty board when the click on the game they want to play
      $scope.goToGame = function($index){
        $location.path('/games/' + $scope.publicGames[$index]._id)
        $interval(function(){
          $http({
            method : 'POST',
            url    : '/api/games/' + $scope.publicGames[$index]._id,
            data   : { id : $scope.publicGames[$index]._id }
          }).then(function(response){
            console.log(response)
          })
        },1000)


      }




  })
