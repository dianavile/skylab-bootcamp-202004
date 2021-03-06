describe('filter', function() {
    it("should return an array with numbers that are below 15", function() {
        var numArr = [1, 22, 13, 17, 19, 15];

        var result = filter(numArr, function(x) {
            return x < 15;
        });

        expect(result).toEqual([1, 13]);
    });


    it("should return an array with words that have 4 letters or more", function() {

        var strArray = ["alejandro", "cris", "pol", "ana", "marc", "fer", "lua"];

        var result = filter(strArray, function(x) {
            return x.length >= 4;  
        });

        expect(result).toEqual(["alejandro", "cris", "marc"])
        
    });

    it("should return an empty array because we are searching for a number great than 6", function() {

        var numArray = [1, 2, 3, 4, 5];

        var result = filter(numArray, function(x) {
            return x > 6;  
        });

        expect(result).toEqual([])
        
    });
});