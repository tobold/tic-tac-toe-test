describe("Ref", function() {
  var ref = new Ref();
  var playermoves = [[0,0]];
  var winningplayermoves = [[0,0],[1,0],[2,0]];

  describe("#judge", function(){
    it("returns false if the current player didn't win", function(){
      expect(ref.judge(playermoves)).toEqual(false);
    });
    it("returns true if the current player won", function(){
      expect(ref.judge(winningplayermoves)).toEqual(true);
    });
  });
});
