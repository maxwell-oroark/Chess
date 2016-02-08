var chessModule = angular.module('chess', [])

chessModule.controller('chessController', ['$scope','chessData', function($scope, chessData){

	$scope.greeting = chessData.greeting

	$scope.board = chessData.board

	$scope.currentPosition = 


	// console.log($scope.board.rows)

	// console.log($scope.board.rows[0].squares)

	// console.log($scope.board)


	$scope.saySq = function($index, square){

		console.log('the square I clicked on is ' + square.ID)
		console.log(square.contents)

		if(square.contents){

			$scope.fromSquare = square
			$scope.fromPiece = square.contents

		} else {

			square.contents = $scope.fromPiece
			$scope.fromSquare.contents = null

		}


		
	}

	$scope.pieces = chessData.pieces












































}])

