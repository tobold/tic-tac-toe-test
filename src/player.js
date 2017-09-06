(function(exports){

  function Player(board) {
    this.board = board;
  }

  Player.prototype = {
    play: function(coordinates) {
      this.board.place(coordinates);
    }
  };

  exports.Player = Player;
})(this);
