
// calling a function with no this value.
console.log(Math.max.apply(null, [17, 23, 12]));

// calling a function while setting the this value.


var jane = {
	name: 'jane',
	sayHello: function (otherName) {
		console.log(this.name + ' say hello to ' + otherName);
	}
};

var mike = {
	name: 'nonny'
};

jane.sayHello.apply(mike, ['herry']);
