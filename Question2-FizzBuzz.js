function fizzBuzz(n) {
	if (n % 3 === 0) {
		return 'Fizz';
	} else if (n % 5 === 0) {
		return 'Buzz';
	} else if (n % 3) && (n % 3) {
		return 'fizzBuzz';
	} else if (n % 3 !== 0) && (n % 5 !== 0) {
		return n;
	};
}