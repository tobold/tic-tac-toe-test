describe("Game", function() {
  var game;
  var board = jasmine.createSpyObj("board", {
    'place': null,
    'board':[]
  });
  var ref = jasmine.createSpyObj("ref", ["judge"]);
  var player1 = jasmine.createSpyObj("player1", {
    'play': null,
    'moves': []
  });
  var player2 = jasmine.createSpyObj("player2", {
    'play': null,
    'moves': []
  });
  var validator = jasmine.createSpyObj("validator", {
    'validate': true
  });

  beforeEach(function() {
    game = new Game(player1, player2, board, ref, validator);
  });

  describe("#play", function(){
    it("delegates to the validator before playing", function(){
      game.play(0,0);
      expect(validator.validate).toHaveBeenCalledWith(0,0, board);
    });
    it("delegates to the player to play a 0 or X", function(){
      game.play(0,0);
      expect(player1.play).toHaveBeenCalledWith(0,0, board);
    });
    it("swaps turns automatically after someone has played", function(){
      expect(game._currentplayer).toBe(player1);
      game.play(0,0);
      expect(game._currentplayer).toBe(player2);
    });
    it("won't continue if the game is over", function(){
      game._run = 'draw';
      expect(game.play(0,0)).toBe("Draw! everybody loses!");
    });
  });
});
