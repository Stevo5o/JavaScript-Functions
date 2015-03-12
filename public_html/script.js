/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// Modules reuse code across apps
// Namespacing protects vars
// Passing args
// Setting defaults

var ste = (function() {
	var DEFAULTS = {
		say: 'hello'
	};

	return {
		speak: function() {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || DEFAULTS.say;
			console.log(statement);
		}
	};

})();