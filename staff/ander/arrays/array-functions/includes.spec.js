describe("includes", function () {
  it("Should itereate on the array and return the value of the match", function () {
    var array = [1, 2, 3];

    var matchIndex = includes(array,3);

    expect(matchIndex).toBe(true);
  });
  describe("includes", function () {
  it("Should itereate on the array and return the value of the match", function () {
      var array = [1, 2, 3];
  
      var matchIndex = includes(array, 9);
  
      expect(matchIndex).toBe(false);
    });
  
});
});