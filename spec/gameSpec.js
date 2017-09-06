describe("Game", function() {
  player1 = jasmine.createSpyObj("player1", ["play"]);
  player2 = jasmine.createSpyObj("player2", ["play"]);

  beforeEach(function() {
    game = new Game(player1, player2);
  });

  describe("#play", function(){
    it("delegates to the player to play a 0 or X", function(){
      game.play([0,0]);
      expect(player1.play).toHaveBeenCalledWith([0,0]);
    });
    it("swaps turns automatically after someone has played", function(){
      expect(game.currentPlayer()).toBe(player1);
      game.play([0,0]);
      expect(game.currentPlayer()).toBe(player2);
    });
  });

  describe("#swapTurns", function(){
    it("swaps the current player", function(){
      expect(game.currentPlayer()).toBe(player1);
      game.switchTurn();
      expect(game.currentPlayer()).toBe(player2);
    });
  });
});
