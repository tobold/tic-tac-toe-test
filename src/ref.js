(function(exports){

  function Ref() {}

  Ref.prototype = {
    judge: function(board, symbol, x, y) {
      var i, verdict;
      var size = board.length;

      for(i = 0; i < size; i++){
        if(board[i][x] != symbol) { break; }
        if(i === size - 1){ return true; }
      }

      for(i = 0; i < size; i++){
        if(board[y][i] != symbol) { break; }
        if(i === size - 1){ return true; }
      }

      if(x === y){
        for(i = 0; i < size; i++){
          if(board[i][i] != symbol) { break; }
          if(i === size - 1){ return true; }
        }
      }

      if(x + y === size - 1){
        for(i = 0; i < size ; i++){
          if(board[i][(size - 1) - i] != symbol) { break; }
          if(i === size - 1){ return true; }
        }
      }

      return false;
    }
  };

  exports.Ref = Ref;
})(this);

function isArrayInArray(source, search) {
  for (var i = 0; i < source.length; i++) {
    if (source[i][0] === search[0] && source[i][1] === search[1]) {
      return true;
    }
  }
  return false;
}
