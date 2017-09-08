(function(exports){

  function Validator() {
  }

  Validator.prototype = {
    validate: function(x, y, board) {
      if((y > 2 || y < 0) || (x > 2 || x < 0)) { throw "no such coordinate"; }
      if(board[y][x] != "-") { throw "tile already taken"; }
    }
  };

  exports.Validator = Validator;
})(this);
