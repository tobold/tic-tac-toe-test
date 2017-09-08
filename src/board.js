(function(exports){

  function Board() {
    this._board = generate2DArray(3, 3);
  }

  Board.prototype = {
    place: function(x, y, symbol) {
      this._board[y][x] = symbol;
    },
    board: function() {
      return this._board;
    }
  };

  exports.Board = Board;
})(this);

function generate2DArray(width, height) {
  var array = [];
  for(var y = height; y > 0; y--) {
    var row = [];
      for(var x = width; x > 0; x--) { row.push("-"); }
    array.push(row);
  }
  return array;
}
