describe("Player", function() {
  board = jasmine.createSpyObj("board", ["place"]);

  var player1 = new Player(board);
  var player2 = new Player(board);

  describe("#play", function(){
    it("delegates to the board to place a 0 or X", function(){
      player1.play([0,0]);
      expect(board.place).toHaveBeenCalledWith([0,0]);
    });
  });
});
