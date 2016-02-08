chessModule
	.factory('chessData',[function(){

		var greeting = 'welcome to my chess game'

		// Gameboard Object

		var gameBoard = {}

		
		//Board Constructor

		function Board (rows) {
			this.rows = rows
		}

		//Row Constructor
		function Row (squares) {
			this.squares = squares
		}

		//Square Constructor
		function Square (contents, ID) {
			this.contents = contents
			this.ID = ID
		}

		// A piece constructor

		var p = {
			name : 'whitePawn',
			img : 'images/wP.png',
		}

		var r = {
			name : 'whiteRook',
			img : 'images/wR.png',
		}

		// All my square objects

		var a1 = new Square(null, 'a1')
		var a2 = new Square(null, 'a2')
		var a3 = new Square(null, 'a3')
		var a4 = new Square(null, 'a4')
		var a5 = new Square(null, 'a5')
		var a6 = new Square(null, 'a6')
		var a7 = new Square(null, 'a7')
		var a8 = new Square(null, 'a8')

		var b1 = new Square(p, 'b1')
		var b2 = new Square(p, 'b2')
		var b3 = new Square(p, 'b3')
		var b4 = new Square(p, 'b4')
		var b5 = new Square(p, 'b5')
		var b6 = new Square(p, 'b6')
		var b7 = new Square(p, 'b7')
		var b8 = new Square(p, 'b8')

		var c1 = new Square(null, 'c1')
		var c2 = new Square(null, 'c2')
		var c3 = new Square(null, 'c3')
		var c4 = new Square(null, 'c4')
		var c5 = new Square(null, 'c5')
		var c6 = new Square(null, 'c6')
		var c7 = new Square(null, 'c7')
		var c8 = new Square(null, 'c8')

		var d1 = new Square(null, 'd1')
		var d2 = new Square(null, 'd2')
		var d3 = new Square(null, 'd3')
		var d4 = new Square(null, 'd4')
		var d5 = new Square(null, 'd5')
		var d6 = new Square(null, 'd6')
		var d7 = new Square(null, 'd7')
		var d8 = new Square(null, 'd8')

		var e1 = new Square(null, 'e1')
		var e2 = new Square(null, 'e2')
		var e3 = new Square(null, 'e3')
		var e4 = new Square(null, 'e4')
		var e5 = new Square(null, 'e5')
		var e6 = new Square(null, 'e6')
		var e7 = new Square(null, 'e7')
		var e8 = new Square(null, 'e8')

		var f1 = new Square(null, 'f1')
		var f2 = new Square(null, 'f2')
		var f3 = new Square(null, 'f3')
		var f4 = new Square(null, 'f4')
		var f5 = new Square(null, 'f5')
		var f6 = new Square(null, 'f6')
		var f7 = new Square(null, 'f7')
		var f8 = new Square(null, 'f8')

		var g1 = new Square(null, 'g1')
		var g2 = new Square(null, 'g2')
		var g3 = new Square(null, 'g3')
		var g4 = new Square(null, 'g4')
		var g5 = new Square(null, 'g5')
		var g6 = new Square(null, 'g6')
		var g7 = new Square(null, 'g7')
		var g8 = new Square(null, 'g8')

		var h1 = new Square(null, 'h1')
		var h2 = new Square(null, 'h2')
		var h3 = new Square(null, 'h3')
		var h4 = new Square(null, 'h4')
		var h5 = new Square(null, 'h5')
		var h6 = new Square(null, 'h6')
		var h7 = new Square(null, 'h7')
		var h8 = new Square(null, 'h8')

		// All my row objects

		var row1 = new Row([a1,a2,a3,a4,a5,a6,a7,a8])
		var row2 = new Row([b1,b2,b3,b4,b5,b6,b7,b8])
		var row3 = new Row([c1,c2,c3,c4,c5,c6,c7,c8])
		var row4 = new Row([d1,d2,d3,d4,d5,d6,d7,d8])
		var row5 = new Row([e1,e2,e3,e4,e5,e6,e7,e8])
		var row6 = new Row([f1,f2,f3,f4,f5,f6,f7,f8])
		var row7 = new Row([g1,g2,g3,g4,g5,g6,g7,g8])
		var row8 = new Row([h1,h2,h3,h4,h5,h6,h7,h8])

		// My board object

		var board1 = new Board([row1, row2, row3,row4,row5,row6,row7,row8])

		// Pieces


		

		var r = {
			value: '<img src = "images/wR.png"/>'
		}

		var n = {
			value: '<img src = "images/wn.png"/>'
		}
		
		board1.pieces = [p,r,n]

		function sqValue(){

		}

		


		return {

			greeting : greeting,
			board : board1,
			pieces : board1.pieces

		}




	}])






