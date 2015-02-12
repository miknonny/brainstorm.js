// "use strict";
// Capitalize the first character of each word on string.

var str = "How can mirrors be real if our eyes aren't real";
var newStr = str.split(' ');


var anotherStr = newStr.map(function (str) {
	return str.replace(str[0], str[0].toUpperCase());
});

String.prototype.toJadenCase = function () {
  var newString =  this.split(' ').map(function (str) {
	  return str.replace(str[0], str[0].toUpperCase());
  });
  return newString.join( ' ');
};

// console.log(str.toJadenCase());


var solution = function  (str, ending) {
	return str.substr(-ending.length) === ending;
};

// console.log(solution('abc', 'abc'));
// console.log(solution('abc', 'bc'));

var myArray = 
[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
   "Donder Jonker", 
   "Blitzen Claus"
];

var sorted = myArray.sort(function (a, b) {
	return a.split(' ')[1].localeCompare(b.split(' ')[1]);
});
console.log(sorted);

function sortReindeer(reindeerNames){
  return reindeerNames.sort(function (a, b) {
    return a.split(' ')[1].localeCompare(b.split(' ')[1]);
  });
}


var flatten = function (lol) {
	return [].concat.apply([], lol);
};

// Array.prototype.concat.apply([], lol)


Array.prototype.sum = function () {
	var mySum = function (array) {
		if (array.length === 0) {
			return 0;
		} else {
			return array[0] + mySum(array.slice(1));
		}
	};
	return mySum(this);
}; 

Array.range = function (start, count) {
	var myArray = [];
	while (count > 0) {
		myArray.push(start);
		start += 1;
		count--;
	}
	return myArray;
};
var array = [1, 2, 3, 4, 5];

console.log(Array.range(1, 7));



console.log(Array(5));

Array.range = function (start, count) {
	return Array.apply();
};


function triangular( n ) {
  if (n <= 0) {
    return n;
  } else {
    return n + triangular(n - 1);
  }
}

console.log(triangular(40));
/*
var  digitize = function (n) {
	return n.sort(function (a, b) {
    return a.localeCompare(b);
  });
};
*/

var digitize = function (n) {
	return String.prototype.split.call(n, '')
    .map(function (n) {
      return Number(n);
    });
};

console.log(digitize(234123));


var rabbit = {};

rabbit.speak = function (line) {
	console.log('the rabbit says: ', line);
};
rabbit.speak('fuck you');

var speak = function (line) {
	console.log("the " + this.type + "rabbit says: " + line);
};


var whiteRabbit = {type: 'white', speak: speak};
var fatRabbit = {type: 'fat', speak: speak};

whiteRabbit.speak('its raining here...');
fatRabbit.speak('i am tired now.');

// The this keyword is used to output the kind of rabbit that is speaking,

// the first argument to call and apply is this.

// apply tkes an array as an argument and call takes just
// a single argument.

speak.apply(whiteRabbit, ['burp']);


var multiplicationTable = function (size) {

};






























