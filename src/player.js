(function(exports){

  function Player(symbol) {
    this.symbol = symbol;
    this._moves = [];
  }

  Player.prototype = {
    play: function(x, y, board) {
      this._moves.push([x, y]);
      board.place(x, y, this.symbol);
    },
    moves: function() {
      return this._moves;
    }
  };

  exports.Player = Player;
})(this);
