describe("Player", function() {
  var player1, player2;
  var board = jasmine.createSpyObj("board", ["place"]);

  beforeEach(function() {
    player1 = new Player('X');
    player2 = new Player('0');
  });

  describe("#play", function(){
    it("delegates to the board to place a 0 or X", function(){
      player1.play(0,0, board);
      expect(board.place).toHaveBeenCalledWith(0,0,'X');
    });
  });

  describe("#moves", function(){
    it("returns an array of all of the players moves", function(){
      player1.play(0,0, board);
      expect(player1.moves()).toEqual([[0,0]]);
    });
  });
});
