describe("Board", function() {
  beforeEach(function() {
    board = new Board();
  });

  describe("#place", function(){
    it("places an X at the given coordinates", function(){
      board.place(0,0,"X");
      expect(board.board()).toEqual( [["X","-","-"],
                                      ["-","-","-"],
                                      ["-","-","-"]] );
      board.place(0,1,"0");
      expect(board.board()).toEqual( [["X","-","-"],
                                      ["0","-","-"],
                                      ["-","-","-"]] );
    });
    it("places an X at the given coordinates", function(){
      expect(function() { board.place(3,2,"X"); }).toThrow("no such coordinate");
    });
  });
});
