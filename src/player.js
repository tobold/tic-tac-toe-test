(function(exports){

  function Player(symbol) {
    this.symbol = symbol;
  }

  Player.prototype = {
    play: function(coordinates, board) {
      board.place(coordinates, this.symbol);
    }
  };

  exports.Player = Player;
})(this);
