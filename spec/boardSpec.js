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
    it("raises an error if placed off the board", function(){
      expect(function() { board.place(3,2,"X"); }).toThrow("no such coordinate");
      expect(function() { board.place(-1,3,"X"); }).toThrow("no such coordinate");
    });
    it("cannot place ontop of another symbol", function(){
      board.place(0,0,"X");
      expect(function() { board.place(0,0,"0"); }).toThrow("tile already taken");
    });
  });
});
