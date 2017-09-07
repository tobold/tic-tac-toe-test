(function(exports){

  function Game(player1, player2, board) {
    this._player1 = player1;
    this._player2 = player2;
    this._currentplayer = player1;
    this._board = board;
  }

  Game.prototype = {
    play: function(x, y) {
      this._currentplayer.play(x, y, this._board);
      switchTurn();
    },
  };

  exports.Game = Game;
})(this);

switchTurn = function() {
  self = this.game;
  if(self._currentplayer === self._player1) {
    self._currentplayer = self._player2;
  } else if (self._currentplayer === self._player2){
    self._currentplayer = self._player1;
  }
};
