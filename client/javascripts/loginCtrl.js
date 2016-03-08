var chessModule = angular.module('chess')

chessModule
	.controller('loginCtrl', ['$scope', '$http', 'Auth', '$location', function($scope, $http, $Auth, $location){

		//Angular routing on LOG IN.  Need to develop bad login error handling.
		$scope.login = function(){
			$Auth.login($scope.loginForm.username, $scope.loginForm.password)
			$location.url('/home')
			// $http({
			// 	method : 'POST',
			// 	url    : '/api/login',
			// 	data   : $scope.loginForm
			// }).then(function(returnData){
			// 	console.log('working')
			// 	if ( returnData.data.token ) {
			// 		window.localStorage.setItem('token', returnData.data.token)
			// 	} else { console.log(returnData)}
			// })
			// window.location.href="/html/main.html"
		}


		//Angular routing on SIGN UP.  Maybe need to add authentication of correct username and password

      $scope.signup = function(){
          // $http({
          //     method : 'POST',
          //     url    : '/api/signup',
          //     data   : $scope.signupForm
          // }).then(function(returnData){
          //     console.log(returnData)
          //     if ( returnData.data.token) {
					// 			window.localStorage.setItem('token', returnData.data.token)
					// 		 }
					//
          // })
					// window.location.href="/main.html"
      }

			}])
