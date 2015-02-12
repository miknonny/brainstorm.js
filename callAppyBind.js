//JAVASCRIPT APPLY, CALL AND BIND.


//BIND.
// This is used to call a function with the this value set explictly.
// Bind allows us to set which specific object will be bound to this.

var data = [
	 {name:"Samantha", age:12},
   {name:"Alexis", age:14}
];

var user = {
	// local data variable.
	
	data :[
		{name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
	],

	showData: function (event) {
		var randomNum = (Math.random() * 2 | 0 +1) - 1;
		console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
	}
};

// Assign the show data method of the user object to a variable.
var showDataVar = user.showData;
showDataVar();  // Samaantha 12 from the global data array not the local data array.

// We can fix this problem by setting the 'this' value to the bind method.
var showDataVar = user.showData.bind(user);


// BIND ALLOWS US TO BORROW METHOD.
//In javascript we can pass functions around return them or borrow them. the bind function
// makes this super easy. 

var cars = {
	data: [
		{name: 'Honda accord', age: 3},
		{name: 'ferrar', age: 10}
	]
};

// We can borrow the showData() method from the user object we defined in the last example.
cars.showData = user.showData.bind(cars);
cars.showData();

// JAVASCRIPT ALLOWS US TO CURRY A FUNCTION.


var greet = function (gender, age, name) {
	// this code eluded me for a very long time.
	var salutation = (gender === 'male' ? 'Mr. ' : 'Ms.');
	return (age > 25 ? ('hello, ' + salutation + name) : ('hey,' + name));
};

var gender = 'male',
		age    = 26,
		name   = 'mike';

console.log(greet(gender, age, name));
// hello, Mr. mike
// We use the bind method to curry. Present one or more of our  parameters.
// this allows us to specify the extra parameter that we need.

var greetAnAdultMale = greet.bind(null, 'male', 45);
console.log(greetAnAdultMale('jerry'));
// "Hello, Mr. Jerry."​



// APPLY AND CALL METHODS.
// Apply and call allow us to borrow methods and set the this value.
// Apply also allows us to set the this value on a function.























