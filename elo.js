// callbacks


var map = function (arr, fn) {
	var newArray = [];
	arr.forEach(function (i) {
		newArray.push(fn(i));
	});
	return newArray;
};


var result = map([1, 2, 3, 4, 5], function (x) {
	return x * x;
});
console.log(result);

var map = function (array, fn) {
	var newArray = [];
	array.forEach(function(i) {
		newArray.push(fn(array(i)));
	});
	return newArray;
};


var mapResult = map([1, 2, 3, 4, 5], function (x) {
	return x*2;
});

// console.log(mapResult);

var reduce = function (array, fn) {
	var prev = array[0];
	for (var i = 1; i < array.length; i += 1) {
		var next = array[i];
		prev = fn(prev, next);
	}
	return prev;
};


var x = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (prev, next) {
	return prev * next;
});

// console.log(x);


// doing a reduce from the last item.
// 
var reduceRight = function (array, fn) {
	
	var arrayIndex = array.length - 1, 
			lastItem = array[arrayIndex];
	for (var i = (arrayIndex - 1); i >= 0; i--) {
		lastItem = fn(lastItem, array[i]);
	}
	return lastItem;
};


var y = reduceRight([8, 9, 15, 4], function (x, y) {
	return x + y;
});	

// console.log(y);


// Recursion.



// Rewriting the examples in javascript.

var listSum = function (numList) {
	
	//base case.
	if (numList.length === 1) {
		return numList[0];
	} else {
		//change it state and try to move towards the base case.
		return numList[0] + listSum(numList.slice(1));
	}
};

console.log(listSum([4,3,2,1]));
4 + (3,2,1);
4 + (3 + (2, 1));
4 + (3 + (2 + (1))); 

//recursing factorial

var factorial = function (num) {
	// base case;
	if (num <= 1) {
		return num;
	} else {
		return num * factorial(num - 1);
	}
};

// breaking it down;

console.log(factorial(15));


/**
factorial(3)

3* factoral(3-1);
3 * 2 * factorial (2-1);
**/
var raise = function (base, exponent) {
	if (exponent === 0) {
		return 1;
	} else {
		return base * raise(base, exponent - 1);
	}
};

console.log(raise(2, 40));

// thaat is the answer,

/**
2 * raise(2, 2);
2 * 2 * raise(2, 1)
2 * 2 * 2 raise (2, 0)
2 * 2 * 2 * 1;
**/

// the puzzle starting from 1 either add 5 or multiply by 3.
// write a function that given the amount of such additions and multiplication
// produces the no.


// for example 13. 

// multiply by 3 and add 5 twice.
// 1 * 3 + 5 + 5 = 13;


var findSolution = function (target) {
	function find(start, history) {
		// base case.
		if (start === target) {
			console.log(history);
			return history;
		} else if (start > target) {
			console.log(history, ' = null');
			return null;
		} else {
			console.log(history);
			return find(start + 5, "(" + history + " + 5") || find(start * 3, "(" + history + " * 3)");
		}
	}
	return find(1, "1");
};

findSolution(14);

var printFarmInventory = function (cows, chickens) {
	var cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(cowString + "Cows");
	var chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(chickenString + "chickens");
};

printFarmInventory(7, 11);


// function that takes two args and returns the minimum value,

var minimum  = function (a, b) {
	if (a < b) {
		return a;		
	} else {
		return b;
	}
};
// takes two arguments and returns the max.
var max = function (a, b) {
	if (a < b) {
		return b;
	} else {
		return a;
	}
};
console.log(minimum(200, 2000));

var executeFn = function (a, b, fn) {
	console.log(fn(a, b));
};

executeFn(2, 3, minimum);

var isEven = function () {
	// recurse...
};
 var someName = "one";
 console.log(someName[1]);


// number of occurence of the character 'B'
var countB = function (string) {
	var countB = 0;
	for(var i = 0; i < string.length; i++) {
		if (string.charAt(i) === 'B') {
			countB += 1;
		}
	}
	return countB;
};


console.log(countB('BBCBBB'));

// number of occurence of any character.
var countAny = function (string, char) {
	var countChar = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === char)
			countChar += 1;
	}
	return countChar;
};

console.log(countAny('GERONIMO', 'O'));


// This checks if a number is even.
var isEven = function (number) {
	var even = 0;
	odd = 1;
	
	//base case.
	if (number === 0) {
		return console.log('even');
	} else if (number === 1) {
		return console.log('odd');
	}
	//tending towards base case.1
	else {
		isEven(number - 2);
	}
};
isEven(100);

var anotherName = "michael";
console.log(typeof  anotherName.toUpperCase);



console.log(anotherName.toUpperCase());


thatArray = [];
thatArray.push('fuck');
thatArray.push('you');
thatArray.push('man');
var thisArray = thatArray.join(" ");
console.log(thatArray);
console.log(thisArray);


var object1 = {value: 10},
	object2 = object1,
	object3 = {value: 20};
console.log(object1 === object2);
console.log(object1 === object3);


var journal = [];

var addEntry = function (events, didITurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didITurnIntoASquirrel
	});
};

addEntry(['work', 'touch tree', 'pizza', 'running', 'television'], false);
console.log(journal);

addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);
console.log(journal);

//FUNCTIONS THE ULTIMATE.

// Functions that operate on other functions.










