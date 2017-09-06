(function(exports){

  function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this._currentplayer = this.player1;
  }

  Game.prototype = {
    play: function(x, y) {
      this._currentplayer.play(x, y, board);
      this.switchTurn();
    },
    currentPlayer: function() {
      return this._currentplayer;
    },
    switchTurn: function() {
      if(this._currentplayer === this.player1) {
        this._currentplayer = this.player2;
      } else {
        this._currentplayer = this.player1;
      }
    }
  };

  exports.Game = Game;
})(this);
