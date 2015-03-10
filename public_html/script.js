/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {
	// new creates a new instance of the obj
	// Each new instance has it's own set of properties
	// 'this' arg points to the instance of the obj
	// Constructor names are capitalized 
	var Dog = function() {
		var name, breed;
		return console.dir(this);
	};

	firstDog = new Dog;
	firstDog.name = 'Rover';
	firstDog.breed = 'Doberman';

	secondDog = new Dog;
	secondDog.name = 'Fluffy';
	secondDog.breed = 'Poodle';

	console.log(firstDog.name);
	console.log(secondDog.name);
}()); // end anon func
