describe("Board", function() {
  var board = new Board();

  describe("#place", function(){
    it("places an X at the given coordinates", function(){
      board.place([0,0]);
      expect(board.board()).toEqual( [["X","-","-"],
                                      ["-","-","-"],
                                      ["-","-","-"]] );
    });
  });
});
