describe("Ref", function() {
  var ref = new Ref();

  describe("#judge", function(){
    describe("(winning column)", function(){
      var board = [["0","0","X"],
               ["0","X","X"],
               ["-","0","X"]];
      var symbol = "X";
      var x = 2;
      var y = 2;

      it("returns true if the current player won", function(){
        expect(ref.judge(board, symbol, x, y)).toEqual(true);
      });
    });

    describe("(winning row)", function(){
      var board = [["0","0","0"],
                   ["X","X","0"],
                   ["X","X","X"]];
      var symbol = "X";
      var x = 2;
      var y = 2;

      it("returns true if the current player won", function(){
        expect(ref.judge(board, symbol, x, y)).toEqual(true);
      });
    });

    describe("(winning diagonal)", function(){
      var board = [["X","0","0"],
                   ["0","X","X"],
                   ["X","0","X"]];
      var symbol = "X";
      var x = 2;
      var y = 2;

      it("returns true if the current player won", function(){
        expect(ref.judge(board, symbol, x, y)).toEqual(true);
      });
    });

    describe("(not winning move)", function(){
      var board = [["X","0","X"],
                   ["0","0","X"],
                   ["X","X","0"]];
      var symbol = "0";
      var x = 2;
      var y = 2;

      it("returns false if the current player didn't win", function(){
        expect(ref.judge(board, symbol, x, y)).toEqual(false);
      });
    });
  });
});
