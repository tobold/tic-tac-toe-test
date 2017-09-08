describe("Validator", function() {
  var validator, board;

  beforeEach(function() {
    validator = new Validator();
    board = jasmine.createSpyObj("board", {
      'board':[["X","-","-"],
               ["-","-","-"],
               ["-","-","-"]]
    });
  });

  describe("#validate", function(){
    it("raises an error if placed off the board", function(){
      expect(function() { validator.validate(3,2, board); }).toThrow("no such coordinate");
      expect(function() { validator.validate(-1,3, board); }).toThrow("no such coordinate");
    });
    it("cannot place ontop of another symbol", function(){
      expect(function() { validator.validate(0,0, board); }).toThrow("tile already taken");
    });
  });
});
