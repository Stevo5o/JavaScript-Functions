/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {
// The 'this' arg points to the object 
// Invoke 'this' using dot notation 
// Binding 'this' happens at invocation time
 var calc = {
 	status: 'Nice',
	plus: function(a, b) {
		return (			
			console.log(this),
			console.log(a + b),
			console.log(arguments),
			console.log(this.status)
		);
	}
};
	calc.plus(2, 2);

}()); // end anon func