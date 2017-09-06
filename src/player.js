(function(exports){

  function Player() {
  }

  Player.prototype = {
    play: function(coordinates, board) {
      board.place(coordinates);
    }
  };

  exports.Player = Player;
})(this);
