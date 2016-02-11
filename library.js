chessModule
	.factory('gameLib',[function(){

		var games = [

			{
				name : 'New Game',
				position : 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
			},{
				name: 'king\'s Indian',
				position: 'rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R'
			},{
				name: 'King\'s Gambit Accepted',
				position: 'rnbqkbnr/ppp2ppp/8/3P4/5p2/5N2/PPPP2PP/RNBQKB1R'
			}


		]

		var endgames = [

			{
				name : 'Rook Checkmate',
				position: ''
			},{
				name : 'Bishop Checkmate',
				position: ''
			},{
				name : 'Pawn Puzzle',
				position: ''
			}

			]

		var famousgames = [

			{
				name : 'Bobby Fisher',
				position : ''
			},{
				name : 'Kasparov',
				position : ''
			},{
				name : 'Murphy',
				position : ''
			}





		]



		return {
			games : games,
			endgames : endgames,
			famousgames : famousgames
		}


	}])