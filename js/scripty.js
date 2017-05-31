/**
 * scripty.js
 * @ Stephen O'Connor, 2017
 *
 */

var ste = (function() {
	var DEFAULTS = {
		say: 'hello',
		speed: 'normal'
	};

	return {
		speak: function() {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || DEFAULTS.say;
			document.write(statement);
			return this; // return ste obj
		},
		run: function() {
			var myArguments = arguments[0] || '';
			var running = myArguments.speed || DEFAULTS.speed;
			document.write('running...' + running);
			return this; // return ste obj
		}
	};

})();