/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {
	// invoking through call & apply
	// Indirect invocation
	// Define the value of the 'this' agrument
	// Control: 'this' and 'arguments'
	// 'Call' passes a value 'Apply' passes an array
	var speak = function(what) {
		console.log(what);
		console.log(this.love);
		console.log(this.normal);
	}

	var saySomething = {normal: "meow", love: "purr", hate: "hiss"}

	speak.call(saySomething, saySomething.hate);
	speak.apply(saySomething, ['meouff']);
}()); // end anon func