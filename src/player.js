(function(exports){

  function Player(symbol, name) {
    this._name = name;
    this._symbol = symbol;
    this._moves = [];
  }

  Player.prototype = {
    play: function(x, y, board) {
      this._moves.push([x, y]);
      board.place(x, y, this._symbol);
    }
  };

  exports.Player = Player;
})(this);
