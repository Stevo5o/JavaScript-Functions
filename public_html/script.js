/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {
	// The arguments parameter
	// An array like obj
	// Numerical index arguments[x]
	// Get the arguments.length
	// Loop through arguments
	// Cannot use array methods

	// function literal
	var plus = function() {
		var sum = 0;
		for (var i = arguments.length - 1; i >= 0; i--) {
			sum += arguments[i];
		};
		return sum;
	};

	console.log(plus(2, 2, 2, 3, 2, 3, 4));

}()); // end anon func