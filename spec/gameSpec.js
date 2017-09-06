describe("Game", function() {
  player1 = jasmine.createSpyObj("player1", ["play"]);
  player2 = jasmine.createSpyObj("player2", ["play"]);

  var game = new Game(player1, player2);

  describe("#play", function(){
    it("delegates to the player to play a 0 or X", function(){
      game.play([0,0]);
      expect(player1.play).toHaveBeenCalledWith([0,0]);
    });
  });
});
