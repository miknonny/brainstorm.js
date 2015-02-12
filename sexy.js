//Borrowing a method that uses this.

var person = {
	firstName: "penelope",
	lastName: "barryMore",

	showFullName: function () {
		console.log(this.firstName + " " + this.lastName);
	}
};

// Looking at another Object.
var anotherPerson = {
	firstName: "Rohan",
	lastName: "Khan"
};

// Now we use the apply value to set the this value
// 
person.showFullName.apply(anotherPerson);  //Rohan kit

// Fix this when Used in a method as a callback.


var user = {
	data: [
		{name: "T. Woods", age: 37},
		{name: "P. Mickelson", age: 43}
	],
	clickHandler: function (event) {
		 var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
		 console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
	}
};

// this here refers to the "click" method not the "user" object since the click invoked it.
$("button").click(user.clickHandler);

// We can bind the clickhandler method to the user object like this.

$("button").click(user.clickHandler.bind(user)); 



// Fix this inside closure.

var user = {
	tournament: "The Masters",
	data: [
		{name: "Tiger Woods", age: 35},
		{name: "P Mickelson", age: 67}
	],

	clickHandler: function () {
		this.data.forEach(function (person) {
			console.log('what is this refering to ' + this);
			console.log(person.name + " is playing at " + this.tournament);
		}); 
	}
};

// FOr the inner function to have access to the outer functions this we assing that to this.
// var that = this;

var user = {
	tournament: "The Masters",
	data: [
		{name: "Tiger Woods", age: 35},
		{name: "P Mickelson", age: 67}
	],

	clickHandler: function () {
		var userObj = this;
		this.data.forEach(function (person) {
			console.log(userObj.name + " is playing at " + userObj.tournament);
		}); 
	}
};


// Note that the value of 'this' is assigned at the point of execution. to maeke show that this
// always refer to the user we bind it to the user Object.


var showUserData = user.showData.bind(user);


// Fix this when borrowing method.

var gameController = {
	scores: [20, 34, 21, 45],
	averageScore: null,
	players: [
		{name: 'Tommy', age: 23},
		{name: 'Sandy', age: 29}
	]
};

var appController = {
	scores: [66, 44, 90, 45], 
	averageScore: null,

	average: function () {
		var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
			return prev + curr;
		});	

		this.averageScore = sumOfScores / this.scores.length;
	}
};


appController.average.apply(gameController, gameCotroller.scores);

// the second argument for apply is usually an array.

// Javascript apply, call and bind.

// Javascript's Bind.
// this is used to call a method with the this value set explicitly.


// Here the cars object has no method to print its data to the console.

var cars = {
	data: [
		{name: 'honda accord', age: 23},
		{name: 'tesla model s', age: 2}
	]
};

// we can mind the show data method from the user object we defined.

cars.showData = user.showData.bind(cars);
cars.showData();
// note that in the above example if the car had the showData method it
// might overide it accidentally.


// Function currying. also known as partial function application.This is a function that accepts
// one or more arguments and returns a new function with some arguments.

var myObj = {
	specialFunction: function () {

	},
	anotherSpecialFunction: function () {

	},
	getAsyncData: function (cb) {
		cb();
	},
	render: function () {
		var that = this;
		this.getAsyncData(function () {
			that.specialFunction();
			that.anotherSpecialFunction();
		});
	}
}; 

myObj.render();
