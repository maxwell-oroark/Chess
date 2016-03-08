var chessModule = angular.module('chess', [])

chessModule
	.controller('loginCtrl', ['$scope', '$http', function($scope, $http){

        $scope.signup = function(){
            $http({
                method : 'POST',
                url    : '/api/signup',
                data   : $scope.signupForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.token) { window.location.href="/main.html" }
            })
        }

        $scope.login = function(){
            $http({
                method : 'POST',
                url    : '/api/login',
                data   : $scope.loginForm
            }).then(function(returnData){
								console.log('working')
                if ( returnData.data.token ) { window.location.href="/html/main.html" }
                else { console.log(returnData)}
            })
        }

	}])
