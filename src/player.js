(function(exports){

  function Player(symbol) {
    this.symbol = symbol;
  }

  Player.prototype = {
    play: function(x, y, board) {
      board.place(x, y, this.symbol);
    }
  };

  exports.Player = Player;
})(this);
