/**
 * script.js 
 * @ Stephen O'Connor, March 2015
 * 
 * Dependencies:
 * 
 */

// immediately invoked anonymous function
(function () {

    plus = function (a, b) {
        var sum = a + b;
        return sum;
    };

    console.log(plus(4, 2));

    // immediately invoked and initialize values
    multi = function (a, b) {       
        return console.log(a * b);
    }(4, 2);

}()); // end anon func


