describe("Player", function() {
  board = jasmine.createSpyObj("board", ["place"]);

  var player1 = new Player('X');
  var player2 = new Player('0');

  describe("#play", function(){
    it("delegates to the board to place a 0 or X", function(){
      player1.play(0,0, board);
      expect(board.place).toHaveBeenCalledWith(0,0,'X');
    });
  });
});
