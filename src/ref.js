(function(exports){

  function Ref() {
    this._winningmoves = [[[0,0],[0,1],[0,2]],
                          [[1,0],[1,1],[1,2]],
                          [[2,0],[2,1],[2,2]],
                          [[0,0],[1,0],[2,0]],
                          [[0,1],[1,1],[2,1]],
                          [[0,2],[1,2],[2,2]],
                          [[0,0],[1,1],[2,2]],
                          [[0,2],[1,1],[2,0]]];
  }

  Ref.prototype = {
    judge: function(currentplayermoves) {
      var verdict = false;
      this._winningmoves.forEach(function(winarray) {
        var judgearray = [];
        currentplayermoves.forEach(function(turn){
          if(isArrayInArray(winarray, turn)) { judgearray.push(turn); }
        });
        if(judgearray.length === 3) {
          verdict = true;
          return;
        }
      });
      return verdict;
    }
  };

  exports.Ref = Ref;
})(this);

function isArrayInArray(source, search) {
  for (var i = 0, len = source.length; i < len; i++) {
    if (source[i][0] === search[0] && source[i][1] === search[1]) {
      return true;
    }
  }
  return false;
}
