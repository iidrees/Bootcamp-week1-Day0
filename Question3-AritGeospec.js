'use strict';
describe("Determine the sequence of an array of numbers", function() {

	describe("Case for an empty array", function() {
		it("should return 0 for an empty array", function() {
		    expect(aritGeo([])).toBe(0);
	    });
	    
    });

    describe("Case for an invalid input", function() {
    	it("should return 'Input an array' for 0", function() {
	    	expect(aritGeo(0)).toBe('Input an array');
	    });
	    it("should return 'Input an array' for a single negative number", function() {
	    	expect(aritGeo(-1)).toBe('Input an array');
	    });
    });



    describe("Case for an aritmethic sequence", function() {
	    it("should return 'Aritmethic' for [2,4,6,8,10]", function() {
		    expect(aritGeo([2,4,6,8,10])).toBe('Aritmethic');
	    });
	    it("should return 'Aritmethic' for [5,11,17,23,29,35,41]", function() {
		    expect(aritGeo([5,11,17,23,29,35,51])).toBe('Aritmethic');
	    });
	    it("should return 'Aritmethic' for [15,10,5,0,-5,-10]", function() {
		    expect(aritGeo([15,10,5,0,-5,-10])).toBe('Aritmethic');
	    });

    });

    describe("Case for a geometric sequence", function() {
	    it("should return 'Geometric' for [2,6,18,54,162]", function() {
		    expect(aritGeo([2,6,18,54,164])).toBe('Geometric');
	    });
	    it("should return 'Geometric' for [0.5,3.5,24.5,171.5]", function() {
		    expect(aritGeo([0.5,3.5,24.5,171.5])).toBe('Geometric');
	    });
	    it("should return -1 for [1,2,3,5,8]", function() {
		    expect(aritGeo([1,2,3,5,8])).toBe(-1);
	    });
	    it("should return -1 for [1,3,6,10,15]", function() {
		    expect(aritGeo[1,3,6,10,15])).toBe(-1);
	    });
        it("should return -1 for [1,8,27,64,125]", function() {
    	    expect(aritGeo([1,8,27,64,125])).toBe(-1)
        });
    });
});