/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {

	plus = function(a, b) {
		return (
			console.log(a + b),
			console.log(this),
			console.log(arguments)
		);
	};

	plus(2, 2);

}()); // end anon func