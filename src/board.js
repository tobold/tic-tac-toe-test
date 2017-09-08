(function(exports){

  function Board(size) {
    this._board = generate2DArray(size, size);
    this._moves = 0;
    this._size = size;
  }

  Board.prototype = {
    place: function(x, y, symbol) {
      this._board[y][x] = symbol;
      this._moves ++;
    },
    board: function() { return this._board; },
    full: function() { return this._moves === (this._size * this._size); }
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
