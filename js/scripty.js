/**
 * scripty.js
 * @ Stephen O Connor, 2017
 *
 */

// mdn closures
function init() {
	var name = 'MDN Closures';
	function displayName() {
		console.log(name);
	}
	displayName();
}
init();

var ste = (function () {
	var DEFAULTS = {
		say: 'hello',
		speed: 'normal'
	};

	return {
		speak: function () {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || DEFAULTS.say;
			document.write(statement);
			return this; // return ste obj
		},
		run: function () {
			var myArguments = arguments[0] || '';
			var running = myArguments.speed || DEFAULTS.speed;
			document.write('running...' + running);
			return this; // return ste obj
		}
	};

})();

function showName(firstName, lastName) {
	var nameIntro = "Your name: ";

	function makeFullName(theLastName) {
		return nameIntro + firstName + theLastName;
	}

	return makeFullName;

}

showName("Stephen", "O\'Connor");


