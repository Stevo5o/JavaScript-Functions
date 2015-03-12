/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function /closure

// Modules reuse code across apps
// Namespacing protects vars

var ste = (function() {

	return {
		speak: function() {
			console.log('hello');
		}
	};

})(); // end anon func