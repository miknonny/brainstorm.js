

var greet = function (gender, age, name) {
	// this code eluded me for a very long time.
	var salutation = (gender === 'male' ? 'Mr. ' : 'Ms.');
	return (age > 25 ? ('hello, ' + salutation + name) : ('hey,' + name));
};

var gender = 'male',
		age    = 26,
		name   = 'mike';

console.log(greet(gender, age, name));

// We use the bind method to curry. Present one or more of our  parameters.
// this allows us to specify the extra parameter that we need.

var greetAnAdultMale = greet.bind(null, 'male', 45);
console.log(greetAnAdultMale('jerry'));
