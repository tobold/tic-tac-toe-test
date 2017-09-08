(function(exports){

  function Game(player1, player2, board, ref, validator) {
    this._player1 = player1;
    this._player2 = player2;
    this._currentplayer = player1;
    this._board = board;
    this._ref = ref;
    this._state = "ongoing";
    this._validator = validator;
  }

  Game.prototype = {
    play: function(x, y) {
      calculateState(this);
      this[this._state].apply(this, [x, y]);
    },
    ongoing: function(x, y) {
      if(this._validator.validate(x, y, this._board)) {
        this._currentplayer.play(x, y, this._board);
      }
      switchTurn(this);
    },
    draw: function(x, y) {
      return "Draw! everybody loses!";
    },
    gameover: function(x, y) {
      return "Game over! " + this._currentplayer._name + " wins!";
    },
    state: function() {
      return this._state;
    }
  };

  exports.Game = Game;
})(this);

calculateState = function(game) {
  if(game._player2.moves().length === 4 ) {
    game._state = "draw";
    return "Draw! everybody loses!";
  }
  if(game._ref.judge(game._currentplayer.moves())) {
    game._state = 'gameover';
    return "Game over! " + this._currentplayer._name + " wins!";
  }
};

switchTurn = function(game) {
  if(game._currentplayer === game._player1) {
    game._currentplayer = game._player2;
  } else if (game._currentplayer === game._player2){
    game._currentplayer = game._player1;
  }
};
