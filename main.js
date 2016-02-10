var chessModule = angular.module('chess', [])

chessModule.controller('chessController', ['$scope','chessData', function($scope, chessData){

	// imports board object which contains 'rows', 'files', 'squares', and an array of 64 squares.

	$scope.board = chessData.board

	var rows = $scope.board.rows
	
	//An object of chess piece objects -- p : pawn, k : king, etc

	$scope.pieces = chessData.pieces

	// direct access to board array object

	$scope.boardArray = chessData.boardArray

	// console.log($scope.board.rows[q].squares)

	console.log($scope.board)
	console.log($scope.pieces)

	// This function below results in transporting a piece around, very rudimentary at this stage, need to refactor so that when a piece is grabbed
	// it understands a) what type of piece it is b) where it is on the board and c) most importantly where it CAN move on the board

	$scope.movePiece = function($index, square){

		console.log('the square I clicked on is ' + square.ID)
		console.log(square.contents)

		if(square.contents){

			$scope.fromSquare = square
			$scope.fromPiece = square.contents

		} else if ($scope.fromPiece){
			square.contents = null
			square.contents = $scope.fromPiece
			$scope.fromSquare.contents = null
			$scope.fromPiece = null

		}

		else {
			console.log('no piece there dummy')
		}
		
	}


	// Attempting to build a fen parser that will set my chess board when passed a legitimate Fen string.

	$scope.fen =  ''

	$scope.parseFen = function(fenStr){
		
		var fenArr = fenStr.split('')

		console.log('before:' + fenArr)

		fenArr = fenArr.map(function(currentValue){
			var out = []
			if (!isNaN(parseInt(currentValue))){
				for (var i = 0; i < currentValue; i++){
					out.push('o')
				}
				console.log('high')
				return out.join('')
			} else {
				return currentValue
			}
			
		}).join('')

		console.log('after:' + fenArr)

		fenArr = fenArr.split('/')

		fenArr.forEach(function(currentValue, Parentindex){
	
			currentValue.split('').forEach(function(c, index){
				
				rows[Parentindex].squares[index].contents = angular.copy($scope.pieces[c])
				
			})
		})
	
	}


	

		// for (var q = 0 ; q <= fenArr.length; q++){

		// 	for(fenCount = 0; fenCount < fenStr.length; fenCount++){

		// 		// White Piece Check Here

		// 		if (fenArr[q][fenCount] === 'p'){
		// 			console.log(rows[q].squares[fenCount].contents)
		// 			rows[q].squares[fenCount].contents = $scope.pieces[0]
		// 		}

		// 		else if (fenArr[q][fenCount] === 'r'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[1]
		// 		} 

		// 		else if (fenArr[q][fenCount] === 'n'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[2]
		// 		}

		// 		else if (fenArr[q][fenCount] === 'b'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[3]
		// 		} 

		// 		else if (fenArr[q][fenCount] === 'k'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[4]
		// 		}  

		// 		else if (fenArr[q][fenCount] === 'q'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[5]
		// 		}  

		// 		// Black Piece Check Here

		// 		else if (fenArr[q][fenCount] === 'P'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[6]
		// 		} 

		// 		else if (fenArr[q][fenCount] === 'R'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[7]
		// 		}

		// 		else if (fenArr[q][fenCount] === 'N'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[8]
		// 		} 

		// 		else if (fenArr[q][fenCount] === 'B'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[9]
		// 		}  

		// 		else if (fenArr[q][fenCount] === 'K'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[10]
		// 		} 

		// 		else if (fenArr[q][fenCount] === 'Q'){
		// 			rows[q].squares[fenCount].contents = $scope.pieces[11]
		// 		}  

		// 		else {
		// 			rows[q].squares[fenCount].contents = null
		// 		}
				
	// 		}
		
	// }


}])

