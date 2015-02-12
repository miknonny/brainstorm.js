// THE THIS VARIABLE
// ThE MOST IMPORTANT THING TO NOTE ABOUT THIS IS THE EXECUTION CONTEXT.
// THE USE OF THIS INSIDE A FUNCTION.

var person = {
	firstName: 'mbah',
	lastname: 'Michael',

	showFullName: function () {
		console.log(this.firstName + ' ' + this.lastName);
	}
};


// BASIC JQUERY EXAMPLE OF THIS.
// In this use case, this in the anonymous function should be bound to the global variable. 
// as but it is being bound to the button. Note that jquery binds $(this) using to the button
// with the help of its library.
$('button').click(function (event) {
	console.log($(this).prop('name'));
});

// THE BIGGEST GOTCHA IN THIS.

var person = {
	firstName: 'mbah',
	lastname: 'Michael',

	showFullName: function () {
		console.log(this.firstName + ' ' + this.lastName);
	}
};

var firstName = 'mbah',
	lastname = 'michael';

function showFullName () {
  // "this" inside this function will have the value of the window object​
  // because the showFullName () function is defined in the global scope, 
  // just like the firstName and lastName​
  console.log (this.firstName + " " + this.lastName);
}

// EXECUTION CONTEXT/ BORROWING METHODS.
// we can use 'apply' to borrow the 'showFullName' method and execute it on 'anotherPerson'

var person = {
	firstName: 'mbah',
	lastname: 'Michael',

	showFullName: function () {
		console.log(this.firstName + ' ' + this.lastName);
	}
};


var anotherPerson = {
	firstName: 'chudy',
	lastname: 'Nwosu',
};

person.showFullName.apply(anotherPerson);


// FIX 'THIS' INSIDE CLOSURE.
// 

var user = {
	tournament: 'masters',
	data: [
		{name: 'M. Michael', age: 27},
		{name: 'C. Nwosu', age: 28}
	],

	// to fix this problem we assign this to that and replace this with that in
	// the console.log function.
	clickHandler: function () {
		this.data.forEach(function (person) {
			console.log('what is this refering to' + this); // Object window.
		});
	}

};

// FIX THIS WHEN THE METHOD IS ASSIGNED TO A VARIABLE.

var data = [
	  {name:"Samantha", age:12},
	  {name:"Alexis", age:14}
	];

var user = {
	tournament: 'masters',
	data: [
		{name: 'M. Michael', age: 27},
		{name: 'C. Nwosu', age: 28}
	],
  showData: function (event) {
  	var randomNum = ((Math.random () * 2 | 0) + 1) - 1; 
	}
};

// assign the user.showData to a variable.
// When we execute the showUserData function, the values printed to 
// the console are from the global data array, 
// not from the data array in the user object​var showUserData = user.showData;

showUserData (); // Samantha 12 (from the global data array)​


// Bind the showData method to the user object.
var showUserData = user.showData.bind(user);



// FIX THIS WHEN BORROWING METHODS.

// we have two objects. one of them has a method named avg that the other does not have.
// so we will borrow the avg method.

var gameController = {
	scores: [20, 34, 55, 46, 77],
	avgScore: null,
	players: [
		{name: 'tommy', playerID: 987, age:23},
		{name: 'paul', playerID: 87, age: 33}
	]
};

var appController = {
	scores: [900, 845, 809, 950],
	avgScores: null,
	avg: function () {
		var sumOfScores = this.scores.reduce(function (prev, curr) {
			return prev + cur;
		});
		this.avgScore = sumOfScores / this.scores.length;
	}
}; 

// The this keyword will not refer to the gameController object it will refer to the
// appController object.

gameController.avgScore = appController.avg();


// Note that we are using the apply method so the second argument has to be an array.

appController.avg.apply (gameController, gameController.scores);

























