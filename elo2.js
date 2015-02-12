var rabbit = {};



rabbit.speak = function (line) {
	console.log('the rabbit says: ', line);
};

rabbit.speak('fuck you');

var speak = function (line) {
	console.log("the " + this.type + " rabbit says: " + line);
};


var whiteRabbit = {type: 'white', speak: speak};
var fatRabbit = {type: 'fat', speak: speak};

whiteRabbit.speak('its raining here...');
fatRabbit.speak('i am tired now.');

// The this keyword is used to output the kind of rabbit that is speaking,

// the first argument to call and apply is this.

speak.apply(whiteRabbit, ['burp']);
speak.call(fatRabbit, 'damn!');
speak.call({type: 'green'}, 'i am a green rabbit');

var empty = {};
console.log(empty.toString);
console.log(empty.toString());

// Now lets check for the prototype of the empty object.
console.log(Object.getPrototypeOf({}));
console.log(Object.prototype);
console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

// Many Objects do not have Object.prototype as their prototype.

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) === Array.prototype);
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(Array.prototype));


// Note that we can use the object.create to return an object with a specific prototype.

var protoRabbit = {
	speak: function (line) {
		console.log('the ', this.type, ' rabbit says ', line);
	}
};

var killerRabbit = Object.create(protoRabbit);
var blackRabbit = Object.create(protoRabbit);

killerRabbit.type = 'killer';
killerRabbit.speak('i will kill you!!!!');



protoRabbit.teeth = 'small';
console.log(killerRabbit.teeth);

killerRabbit.teeth = 'long, sharp and bloody';
console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);


console.log(Array.prototype.toString === Object.prototype.toString);
// false
console.log(Object.prototype.toString.call([1, 2]));
// false

// Note that prototype can be used at any time to add new properties and methods to all objects 
// based on it.

protoRabbit.dance = function () {
	console.log("The " + this.type + " rabbit dances a jig");
};

killerRabbit.dance();

var map = {};

var storeSomething = function (event, something) {
	map[event] = something;
};

storeSomething('pizza', 0.90984);
storeSomething('pringles', 0.2190);

Object.prototype.nonsense = 'hi';

for (var name in map) {
	console.log(name);
}
console.log(toString in map);
console.log('nonsense' in map);
delete Object.prototype.nonsense;

for (var name in map) {
	console.log(name);
}

// Note that all properties in object.prototype are all non enumerable.
// we can ad our own properties to Object.prototype and make it hidden.


Object.defineProperty(Object.prototype, 'hiddenNonsense', {enumerable: false, value: 'hi'});
// Now we have the hiddenNonsense property but it will not show up in the loop.
for (var name in map) {
	console.log(name);
}

console.log(map.hiddenNonsense);

// This next method tells us whether an object has the property that we are looking at.
console.log(map.hasOwnProperty('toString'));

for (var name in map) {
	if (map.hasOwnProperty(name)) {
		// now we can enumerate all the properties we own.
	}
}

// Prototype less objects are Objects that do not inherit from any Object.
// now we no longer need the has own property since all the properties are its own property.

// prototype less object.
var otherMap = Object.create(null);
otherMap.pizza = 0.069;


console.log('toString' in otherMap);
console.log('pizza' in map);


var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!'); },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};


var fakeSanta  = {
	sayHoHoHo: function () { console.log('Ho Ho Ho!'); },
	distributeGifts: function () { console.log('Gifts for all'); },
	goDownTheChimney: function() { console.log('*whoosh*'); },
	fuckYou: function () { console.log('go fuck your self'); }
};

var isSantaClausable = function (obj) {
	var checks = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
	return checks.every(function (item) {
		return (obj.hasOwnProperty(item) && typeof obj.item == 'function');	
	});
};


isSantaClausable(santa);

// Duck typing. an object suitable is determined by the presence of
// certain properties and method with appropriate rather than the actual kind of object.
// 
























