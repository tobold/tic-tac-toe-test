(function(exports){

  function Game(player1, player2, board, ref) {
    this._player1 = player1;
    this._player2 = player2;
    this._currentplayer = player1;
    this._board = board;
    this._ref = ref;
    this._run = true;
  }

  Game.prototype = {
    play: function(x, y) {
      if(this._player1.moves().length === 5 &&
         this._player1.moves().length === 4 )
         { this._run = "draw"; }
      if(this._run === true) {
        this._currentplayer.play(x, y, this._board);
        if(this._ref.judge(this._currentplayer.moves())) {
          this._run = 'gameover';
        }
        console.log(this._board.board());
        switchTurn(this);
      }
      if(this._run === 'gameover') {
        return "Game over! " + this._currentplayer._name + " wins!";
      }
      if(this._run === 'draw') {
        return "Draw! everybody loses!";
      }
    },
  };

  exports.Game = Game;
})(this);

switchTurn = function(game) {
  if(game._currentplayer === game._player1) {
    game._currentplayer = game._player2;
  } else if (game._currentplayer === game._player2){
    game._currentplayer = game._player1;
  }
};
