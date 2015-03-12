/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function /closure
(function() {
	function kung() {
		console.log('foo');
	};

	kung();

	var iKnow = function kung() {
		console.log('bar');
	};

	iKnow();

	var iKnow = function() {
		console.log('Foo');
	}();
}()); // end anon func