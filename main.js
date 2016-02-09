var chessModule = angular.module('chess', [])

chessModule.controller('chessController', ['$scope','chessData', function($scope, chessData){

	$scope.board = chessData.board

	$scope.boardArray = chessData.boardArray

	console.log($scope.boardArray)

	// console.log($scope.board.rows)

	// console.log($scope.board.rows[0].squares)

	console.log($scope.board)


	$scope.movePiece = function($index, square){

		console.log('the square I clicked on is ' + square.ID)
		console.log(square.contents)

		if(square.contents){

			$scope.fromSquare = square
			$scope.fromPiece = square.contents

		} else if ($scope.fromPiece){

			square.contents = $scope.fromPiece
			$scope.fromSquare.contents = null
			$scope.fromPiece = null

		}

		else {
			console.log('no piece there dummy')
		}


		
	}

	$scope.pieces = chessData.pieces

	console.log($scope.pieces)

	// Attempting to build a fen parser that will set my chess board when passed a legitimate Fen string.

	$scope.fen =  ''

	$scope.parseFen = function(fenStr){
		
		var fenCount = 0
		console.log($scope.fen)

		for(fenCount = 0; fenCount < fenStr.length; fenCount++){

			// White Piece Check Here

			if (fenStr[fenCount] === 'p'){
				$scope.boardArray[fenCount].contents = $scope.pieces[0]
			}

			else if (fenStr[fenCount] === 'r'){
				$scope.boardArray[fenCount].contents = $scope.pieces[1]
			} 

			else if (fenStr[fenCount] === 'n'){
				$scope.boardArray[fenCount].contents = $scope.pieces[2]
			}

			else if (fenStr[fenCount] === 'b'){
				$scope.boardArray[fenCount].contents = $scope.pieces[3]
			} 

			else if (fenStr[fenCount] === 'k'){
				$scope.boardArray[fenCount].contents = $scope.pieces[4]
			}  

			else if (fenStr[fenCount] === 'q'){
				$scope.boardArray[fenCount].contents = $scope.pieces[5]
			}  

			// Black Piece Check Here

			else if (fenStr[fenCount] === 'P'){
				$scope.boardArray[fenCount].contents = $scope.pieces[6]
			} 

			else if (fenStr[fenCount] === 'R'){
				$scope.boardArray[fenCount].contents = $scope.pieces[7]
			}

			else if (fenStr[fenCount] === 'N'){
				$scope.boardArray[fenCount].contents = $scope.pieces[8]
			} 

			else if (fenStr[fenCount] === 'B'){
				$scope.boardArray[fenCount].contents = $scope.pieces[9]
			}  

			else if (fenStr[fenCount] === 'K'){
				$scope.boardArray[fenCount].contents = $scope.pieces[10]
			} 

			else if (fenStr[fenCount] === 'Q'){
				$scope.boardArray[fenCount].contents = $scope.pieces[11]
			}  


			else {
				$scope.boardArray[fenCount].contents = null
			}
		}
	}














































}])

