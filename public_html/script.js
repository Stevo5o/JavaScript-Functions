/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function /closure
(function() {
	// Scope: life and death of a var
	// Block scope: vars live with {}
	// Function scope: vars live in functions
	// Scope chain
	// Dangerous global vars
	// Vars definitions are hoisted
	// JS rewrites code

	function myLizard() {
		var lizardName = 'Izzy';

		function otherLizard() {
			var lizardName = 'Izzard';
			console.log(lizardName + ' says hiss');
		}

		otherLizard();
	};

	myLizard();

}()); // end anon func