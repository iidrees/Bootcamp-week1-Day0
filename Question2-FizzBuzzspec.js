'use strict'; 

describe("Determine the divisibility of the number in input", function( {

	describe("Fizz Buzz tests", function(){
		it("should return 'Fizz' for number divisible by 3", function(){
			expect(fizBuzz(3)).toBe('Fizz');
		});

		it("should return 'Buzz' for number divisible by 5", function() {
			expect(fizBuzz(5)).toBe('Buzz');
		});

		it("should return 'Fizz' for 9", function() {
			expect(fizBuzz(9)).toBe('Fizz');
		});
		it("should return 'FizzBuzz' for 15", function() {
			expect(fizBuzz(15)).toBe('FizzBuzz');
		});

		it("should return 'FizzBuzz' for 45", function() {
			expect(fizBuzz(45)).toBe('FizzBuzz');
		});

		it("should return 'FizzBuzz' for 90", function() {
			expect(fizBuzz(90)).toBe('FizzBuzz');
		});

		it("should return 'Fizz' for 63", function() {
			expect(fizBuzz(63)).toBe('Fizz');
		});
		it("should return 7 since its indivisible by 3 and 5", function() {
			expect(fizBuzz(7)).toBe(7);
		});
		it("should return 8 since 8 its indivisible by 3 and 5", function() {
			expect(fizBuzz(8)).toBe(8);
		});
		it("should return 101 since its indivisible by 3 and 5", function() {
			expect(fizBuzz(101)).toBe(101);
		});
		it("should return 'Buzz' for 200", function() {
			expect(fizBuzz(200)).toBe('Buzz');
		});
		it("should return 'Not Fizz' since 200 is not divisible by 3", function() {
			expect(fizBuzz(200)).toBe('Not Buzz');
		});
	});
}));