angular.module("chess")
  .controller("main-controller", function($rootScope, $http, $scope, $location, Auth){
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
              if ( returnData.data.token) {
								window.localStorage.setItem('token', returnData.data.token)
                console.log("true..")
                $location.path('/home')
							 }

          })
      }
      console.log($scope.user)

      //This will be moved after a while into a new controller but for now the stuff below will define creating a new game for the dashboard.



      $scope.newGame = function(){
        $http({
          method : 'POST',
          url    : '/api/games/',
          data   : $scope.user.username
        })
      }





  })
