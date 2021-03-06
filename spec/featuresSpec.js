describe("Features", function() {
  var board, player1, player2, ref, validator, game;

  beforeEach(function() {
    player1 = new Player("X", "player1");
    player2 = new Player("0", "player2");
    board = new Board(3);
    ref = new Ref();
    validator = new Validator();
    game = new Game(player1, player2, board, ref, validator);
  });

  describe("FEATURE", function(){
    it("Players can draw a game", function(){
      game.play(1,1);
      game.play(0,2);
      game.play(1,2);
      game.play(1,0);
      game.play(2,1);
      game.play(0,1);
      game.play(0,0);
      game.play(2,2);
      game.play(2,0);
      expect(game.state()).toEqual("draw");
    });
  });
  describe("FEATURE", function(){
    it("Player1 can win a game", function(){
      game.play(1,1);
      game.play(0,2);
      game.play(0,0);
      game.play(2,2);
      game.play(0,1);
      game.play(2,0);
      game.play(2,1);
      expect(game.state()).toEqual("gameover");
    });
  });
  describe("FEATURE", function(){
    it("Player2 can win a game", function(){
      game.play(1,2);
      game.play(1,1);
      game.play(0,2);
      game.play(0,0);
      game.play(2,1);
      game.play(2,2);
      expect(game.state()).toEqual("gameover");
    });
  });
});
