describe('map', function() {
    it('should iterate on each element and return each value multiplied by 10 in a new external array', function() {
        var array = [1, 2, 3];
        var result = [];

        map(array, function(array, index) {
            result[index] = array * 10;
        });

        expect(result[0]).toBe(10);
        expect(result[1]).toBe(20);
        expect(result[2]).toBe(30);
    });

    it('should iterate on each element provide the full array from the third argument of the expression (callback)', function() {
        var array = [1, 2, 3];
        var result = [];

        forEach(array, function(element, index, array) {
            result[index] = array;
        });

        expect(result[0]).toBe(array);
        expect(result[1]).toBe(array);
        expect(result[2]).toBe(array);
    });
});