/* jshint esnext: true */
//  // Let used to simulate block scope

// let message = 'hi';
// {
// 	let message = 'bye';
// }

// console.log(message);

var myArray = [];

// for(var i = 0; i < 10; i++) {
//   myArray.push(function () {
//     console.log(i);
//   });
// }
// 


// var greeting = (message, greeting) => message + ' ' + greeting; 

// console.log(greeting('mike', 'saunders'));

// var deliveryBoy = {
//   name: 'john',

//   handleMessage: (message, handler) => {
//     handler(message);
//   },
  
//   receive: function () {
//     // Using the arrow function.
//     this.handleMessage('hello', message => console.log(message, this.name));

//   }
// };

// deliveryBoy.receive();

// DEFAULT ARGUMENTS.


var deliveryBoy = {
  name: 'john', 
  
  handleMessage: function (message, handler) {
    handler(message);
  },

  receive: function () {
    var that = this;
    this.handleMessage('hello', function(message) {
      console.log(message + ' ' + that.name);
    });
  }

};

// Assuming


deliveryBoy.receive();




// ES5
var iterator = function (array, fn) {
  fn(array);
};



iterator([1, 2, 3, 4], function (array) {
  array.forEach(function (item) {
    console.log(item);
  });
});


// ES6
var iterator = (array, fn) => fn(array);

iterator([1, 2, 3, 4], array => 
  array.forEach(item => console.log(item))
);

//Assigning default Arguments

var greet = (greeting, name = 'guest') => console.log(greeting + ' ' + name);
greet('welcome', 'SAUNDERS');



var receive = (complete = () => console.log('hello there!!!')) => complete(); 

receive(() => console.log('sup there!!!'));


//DESTRUCTING ASSIGNMENTS.

// Typical in javascript
var obj = {
  color: 'blue'
};
// same as
// var color = 

// Now this says lookup the color property in the object
var {color} = {
  color: 'blue'
};

console.log(color);

var {color, position} = {
  color: 'blue',
  name: 'mike',
  state: 'lagos',
  position: 'forward'
};

console.log(color);

console.log(position);

// Here a function returns an object but we only want the name and state.


var generateObj = function () {
  return {
    color: 'blue',
    name: 'mike',
    state: 'lagos',
    position: 'forward'
  };
};

var {name, state} = generateObj();
console.log(name);
console.log(state);

// Now we can still assign the variables to other names.
var {name: firstName, state: location} = generateObj();
console.log(firstName);
console.log(location);

// Working with arrays.

var [first,,,,fifth] = ['red', 'yellow', 'green', 'brown', 'purple'];
console.log(first);
console.log(fifth);

// Now lets do a more complex example.


var people = [
  {
    'firstName': 'mike',
    'lastName': 'saunders',
    'phone': '08014344534',
    'email': 'mikrsaunder@gmail.com',
    'address': 'owodunni st.'
  },

  {
    'firstName': 'pete',
    'lastName': 'sun',
    'phone': '34554688756543',
    'email': 'pete.sun@gmail.com',
    'address': '34 broadway st.'
  },

  {
    'firstName': 'hewlett',
    'lastName': 'pack',
    'phone': '34567453556',
    'email': 'hewlett.pack@gmail.com',
    'address': '23 palmgroove st'
  },

  {
    'firstName': 'cynthia',
    'lastName': 'cole',
    'phone': '3445456675676',
    'email': 'cynthia.cole@gmail.com',
    'address': '12 silicon valley  st.'
  }

];

people.forEach(({firstName}) => console.log(firstName));

var [, pete] = people;
console.log(pete);

var {email} = pete;
console.log(email);

// here are are logging pete's email which is destructuring the pete object.

var logEmail = function ({email}) {
  console.log(email);
};
logEmail(pete);

// ARRAY COMPREHENSION.
// lets assume that i hava an array of people and i want to structure all of them into
// a second array.

// This does not seem to work in es6 but is a proposal in es7. works on mozilla browser.


//var coolArray = ['one', 'two', 'three', 'four', 'five'];


//var items = [for(items of coolArray) items];

// Note that es6 allows us to put our variable inside of our strings.



// STRING TEMPLATES.

var salutation = 'hello';

console.log(`${salutation}, mike`);

// Note that this also respects white lines across multiple lines

console.log(`${salutation}, 


mike

`);


// note that expressions can be done inside the braces.

var x = 2,
    y = 23;

var equation = `${x} + ${y} = ${x  +  y}`;
// 2 + 23 = 25
console.log(equation);


var message = `its ${new Date().getHours()} and i am sleepy`;

console.log(message);
// its 13 and i am sleepy

var tag = function(string, ...values) {
   values[1] = (values[0] > 20) ? 'awake' : 'sleepy';
   return `$string[0] values[0] string[1] values[1]`;
};
var anotherMessage = tag`its ${new Date().getHours()} and i am ${''}`;


// Generators are made my adding asteriks right after the function keyword.

function* greetGenerator () {
  console.log(`you called next()`);
  yield('hello');
}

let greeter = greetGenerator();

console.log(greeter);
console.log(greeter.next());
console.log(greeter.next());

// you called next()
// { value: undefined, done: true }

// note that the value is undefined because we did not yeild anything from out generator.
// its done because it has gone through all of the yield statements. which there are 
// actually none right now.

function* question () {
  console.log(`generators are lazy`);
  yield('how');
  console.log(`i am not called until the second next`);
  yield('are');
  console.log(`called me before 'you'`);
  yield('you');
  console.log('called when done');
}




// Opposite of destructing..

// note that assigning a variable twice using the 'let' keyword causes  duplicate assaingment.
let firstNames = 'mike';
let lastName = 'geronimo';

let person = {firstNames, lastName};

let mascot = 'Moose';
let team = {person, mascot};

console.log(person);
console.log(team);




// THE SPREAD OPERATOR.
//'...'
//this is a unary operator which spreads an array into its individual elements. 
// the spread operator allows you to take an array and spread it out into its individual ]
// items.

console.log(...[1, 2, 3]);
// 1 2 3;

// the spread operator allows os to push elements easily into other arrays.   

let firsts = [1, 2, 3];
let seconds = [4, 5, 6,];

firsts.push(seconds);
// [ 1, 2, 3, [ 4, 5, 6 ] ]

console.log(firsts) ;

// note that now if i spread out the other array.
first.push(...seconds);
// [1, 2, 3, 4, 5, 6, 7];


// This also works for function parameters.

threeThings = [1, 2, 3];


var addThreeThings = function(a, b, c) {
  let result =  a + b + c;
  console.log(result);
};

console.log(addThreeThings(...threeThings));

// Object Enhancement

var color = 'red';
var speed = 12;
var go = function () {
  console.log('vroom');
};

var car = {color, speed, vroom};

console.log(car.color);
console.log(car.speed);
car.go();















