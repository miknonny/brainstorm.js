// Higher order functions.
//Powered by lexical scoping.

// Higher order functions can be passed in as value
// to other functions. can be returned from other
// functions.

var greaterThan = function (n) {
	return function (m) {
		return m > n;	
	};
};

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// functions that change other functions.

var noisy = function (f) {
	return function (arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	};
};

noisy(Boolean)(1);

// powered by 

var crazyFn = function (fn) {
	return function (arg) {
		return fn(arg);
	};
};

var multiplier = crazyFn(function (x) {
	return x * x;
})(20);

console.log(multiplier);

// Functions that provide new type of control flow.


var repeat = function (times, body) {
	for (var i = 0; i < times; i++) {
		body(i);
	}
};

var testCondition = function (test, then) {
	if (!test) {
		then();
	}
};

repeat(3, function (x) {
	testCondition(x % 2, function () {
		console.log('the no is even');
	});
});

var transparentWrapping = function (f) {
	return function () {
		//what the hell happened here.
		return f.apply(null, arguments);
	};
};


// Converting data to and from json

var string = JSON.stringify({name: "mbah  michael", sex: "male"});

console.log(string);

console.log(JSON.parse(string).name);



var someFunction  = function (fn) {
	return function (arg) {
		return fn(arg);
	};
};


var multiply = function (x) {
	return x*x;
};



// Getting into the mindset of higher order functions.
repeat(3, function (n) {
	unless(n % 2, function () {
		console.log(n, "is even");
	});
});




var repeat = function (times, fn) {
	for (var i = 0; i < times; i++) {
		fn(i);
	}
};

var unless = function (n, fn) {
	if (!test) {
		fn();
	}
};

//typically we would do this.


var  multiplier = function (x) {
	return x* x;
};
var times = 3;
for (var i = 0; i < times; i++) {
	multiplier(i);
}

var doBoth = function (times, fn) {
	for (var i = 0; i < times; i++) {
		fn(i);
	}
};


var someFunction = function (fn) {
	return function (i) {
		fn(i);
	};
};

var noisy = function (f) {
	return function (arg) {
		console.log('calling with arg');
		// there is no way to specify that f takes
		// more than one argument. 
		var val = f(arg);
		return val;
	};
};
var transparentWrapping = function (f) {
	return function () {
		return f.apply(null, arguments);
	};
};

var someThingInteresting = function (fn) {
	return function () {
		// null can be used to simulate method call.
		return f.apply(null, arguments);
	};
}; 
 
someThingInteresting()
[
  {"name": "Emma de Milliano",
   "sex": "f",
   "born": 1876,
    "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"
 },
  {"name": "Carolus Haverbeke", 
  "sex": "m",
   "born": 1832,
   "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"
 }
];

var filter = function (array, fn) {
	var filtered = [];
	for (/*...loop*/) {
		if fn(ancestry) {
			//so something.
			filtered.push(array[i])
		}

	}
}
filter(array, function (x) {
	return x < 2;
});


var reduce = function (array, combine, start) {
	var current = start;
	for (var i = 0; i < array.length; i++) {
		var current = combine(current, array[i])
	};
	return current;
};

reduce([1,2,3,4], function (a, b) {
	return a + b;
})

var reduce = function (array, fn, index) {
	var current = array[0];
	for (var i = 1; i < array.length; i++) {
		current = fn(current, array[i]);
	}
	return current;
};

var max = reduce([1, 34, 22, 11, 10], function (a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
});

console.log(max);


function reduceAncestors(person, f, defaultValue) {
	function valueFor(person) {
		if (perosn == null) {
			return defaultValue;
		}
	}
}




var concatArray = function () {

};

var gatherCorrelations (journal) {
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++) {
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++) {
			var event = events[i];
			if (!(event in phis)) {
				phis[event] = phi(tableFor(event, journal));
			}	
		}
	}
	return phis;
}


gatherCorrelations = function (journal) {
	var phis = {};
	journal.forEach(function (entry) {
		entry.events.forEach()
	});
}























