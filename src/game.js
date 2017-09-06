(function(exports){

  function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentplayer = this.player1;
  }

  Game.prototype = {
    play: function(coordinates) {
      this.currentplayer.play(coordinates);
    }
  };

  exports.Game = Game;
})(this);
