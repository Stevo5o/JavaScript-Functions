/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {
	// Prototypal Inheritance 
	// Every object can be based
	// Multiple objs can inherit 
	// All objs inherit properties
	// Declarations inherit from Function
	// Function constructor inherits from Object
	var speak = function(saywhat) {
		console.log(saywhat);
	};

	var Dog = function() {
		var name, breed;
	};

	var Cat = function() {
		var name, breed;
	};

	Dog.prototype.speak = speak;
	Cat.prototype.speak = speak;

	firstDog = new Dog;
	firstDog.name = "Rover";
	firstDog.breed = "Doberman";
	firstDog.speak('woof');

	firstCat = new Cat;
	firstCat.name = "Tiger";
	firstCat.breed = "Bengal";
	firstCat.speak('meow');
}()); // end anon func
