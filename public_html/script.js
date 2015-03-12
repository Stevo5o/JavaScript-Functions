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
// Chaining module methods calls 

var ste = (function() {
	var DEFAULTS = {
		say: 'hello',
		speed: 'normal'
	};

	return {
		speak: function() {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || DEFAULTS.say;
			console.log(statement);
			return this; // return ste obj
		},
		run: function() {
			var myArguments = arguments[0] || '';
			var running = myArguments.speed || DEFAULTS.speed;
			console.log('running...' + running);
			return this; // return ste obj
		}
	};

})();