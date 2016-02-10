var chessModule = angular.module('chess', [])

chessModule.controller('chessController', ['$scope','chessData', function($scope, chessData){

	// imports board object which contains 'rows', 'files', 'squares', and an array of 64 squares.

	$scope.board = chessData.board

	$scope.fen1 = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
	$scope.fen2 = 'rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R'
	$scope.fen3 = 'rnbqkbnr/ppp2ppp/8/3P4/5p2/5N2/PPPP2PP/RNBQKB1R'
	$scope.fen4 = 'r4rk1/pppb1ppQ/4p3/4P2n/3P1n1q/2N5/PP2N1PP/RB3RK1'

	var rows = $scope.board.rows
	
	//An object of chess piece objects -- p : pawn, k : king, etc

	$scope.pieces = chessData.pieces

	// direct access to board array object

	$scope.boardArray = chessData.boardArray

	// console.log($scope.board.rows[q].squares)

	console.log($scope.board)

	

	$scope.turn = 'white'
	$scope.activePiece = null
	var fromSquare = null

	//click Peice function analyzes information about whether or not an active piece exists,
	// if not, it makes the selected piece active, if so and the square is different, it moves it to that square and switches
	// the turn to the other player, if it is the same square it deactives the piece and removes the highlight


	$scope.clickPiece = function($index, square){
		console.log('clickPiece function running')
			
		if (square.contents && square.contents.color === $scope.turn && square.contents !== $scope.activePiece){
			$scope.selectPiece($index,square)
			fromSquare = square
		} 
		else if (square.contents === $scope.activePiece){
			$scope.deactivatePieces($index,square)
		}
		else{
			$scope.movePiece($index,square)
			// square.contents = null
		}
	}

	$scope.deactivatePieces = function(){
		$scope.activePiece = null
		$scope.board.rows.forEach(function(row){
			row.squares.forEach(function(square){
				square.active = false
			})
		})
	}

	$scope.selectPiece = function($index, square){

		console.log('selectPiece function running')

		if ((square.contents) && (square.contents !== $scope.activePiece)){
			$scope.deactivatePieces()
			$scope.activePiece = square.contents
			square.active = true
			console.log ($scope.activePiece)
		} 
	}

	$scope.movePiece = function($index, square){
		console.log('movePiece function running')
		if ($scope.activePiece){

			square.contents = $scope.activePiece
			$scope.activePiece = null
			$scope.deactivatePieces()
			fromSquare.contents = null

			if($scope.turn === 'white'){
				$scope.turn = 'black'
			}
			else {
				$scope.turn = 'white'
			}
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




}])

