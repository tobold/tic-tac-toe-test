describe("Game", function() {
  var game;
  var board = jasmine.createSpyObj("board", ["place"]);
  var ref = jasmine.createSpyObj("ref", ["judge"]);
  var player1 = jasmine.createSpyObj("player1", ["play", "moves"]);
  var player2 = jasmine.createSpyObj("player2", ["play", "moves"]);

  beforeEach(function() {
    game = new Game(player1, player2, board, ref);
  });

  describe("#play", function(){
    it("delegates to the player to play a 0 or X", function(){
      game.play(0,0);
      expect(player1.play).toHaveBeenCalledWith(0,0, board);
    });
    it("swaps turns automatically after someone has played", function(){
      expect(game._currentplayer).toBe(player1);
      game.play(0,0);
      expect(game._currentplayer).toBe(player2);
    });
  });
});
