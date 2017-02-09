'use strict'

describe("Min-Max numbers in a List ", function() {
	describe("Return the min and max number in the list in a new list follows '[min,max]'", function() {
		it("should return [1,4] for [1,2,3,4]", function() {
			expect(findMinMax([1,2,3,4])).toBe([1,4]);
		});
		it("should return [4,6] for [6,4]", function() {
			expect(findMinMax([6,4])).toBe([6,4]);
		});
		it("should return [2,78] for [4,66,6,44,7,78,8,68,2]", function() {
			expect(findMinMax([4,66,6,44,7,78,8,68,2])).toBe([2,78]);
		});
	});

	describe("Return the number in the list in a new list follows '[min]' when the number is the min and max in that list", function() {
		it("should return 'min is [4]' for '[4,4,4,4,]'", function() {
			expect(findMinMax([4,4,4,4])).toBe('min is [4]');
		});
		ít("should return max '[4]' for '[4,4,4,4]'", function() {
			expect(findMinMax([4,4,4,4])).toBe('max is [4]')
		})
	});

	describe("Return 'input a real numnber' when strings are given instead of int", function() {
		it("should return 'input a real number' for strings", function() {
			expect(findMinMax(typeof(' '))).toBe('input a real number');
		});
		it("should return 'element must be more than one' for '[4]'", function() {
			expect(findMinMax([4])).toBe('element must be more than one');
		});
		it("should return 'error, empty array' for '[]'", function() {
			expect(findMinMax([])).tobe('error, empty array');
		});
		it("should return 'enter positive integers' for '[-1,-5,-4,-84,-8]'", function() {
			expect(findMinMax([-1,-5,-4,-84,-8])).tobe('enter positive integers');
		});
		it("should return 'enter only integers'for '["tolu",3,"tope",4,3,5,2]'", function() {
			expect(findMinMax(["tolu",3,"tope",4,3,5,2])).toBe('enter only integers');
		});
		it("should return 'Please enter only integers, no float types allowed' for '[0.3,6,6.7,4,5,3]'", function() {
			expect(findMinMax([0.3,6,6.7,4,5,3])).toBe('enter only integers, no float types allowed');
		});
	});
});