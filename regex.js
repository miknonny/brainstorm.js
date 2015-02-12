// regular expressions.

var re1 = new RegExp("abc");
var re2 = /abc/;

// Note that special characters should be escaped with a 
// back slash.

// we escape the plus character since it has a special meaning.

var eighteenPlus = /eighteen\+/;
// tells you if the string contains a match of the expression

console.log(/abc/.test("abcde"));

console.log(/abc/.test("abxde"));


console.log(/[0123456789]/.test("in 1992"));

// dash between two characters can be used to indicate
// a range of charcters.
console.log(/[0-9]/.test("in 1992"));

// \d - matches any digits.
// \w - any alphanumerica character('word charcter')
// \s - any white space charcter.
// \D - a charcter that is not a digit.
// \W - A nonalphanumeric charcter.
// \S - A non whitespace charcter.
// . - any charcter except the newline charcter.


var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));

// this matches any charcter except the one in the bracket.

var notBinary = /[^01]/;
console.log(notBinary.test('110100110011101'));
// false
console.log(notBinary.test('1100100010200110'));
// true

// Repeating parts of a pattern.

// one  or more occurences.
console.log(/'\d+'/.test("'123'"));
// true

// 0 or more occurences.
console.log(/'d*'/.test("'123'"));

// A question mark makes part of a pattern optional.

var neighbour = /neighbou?r/;
console.log(neighbour.test("neighbour"));
// true

console.log(neighbour.test("neighbor"));

// {} indicates that a pattern should occur a precise no of 
// times.


var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));

// Matches and Groups.

var match = /\d+/.exec("one two 100");

// the exec method return  an object.
console.log(match);
// -> ["100"]

// Index property tells us where in the string the successful 
// match begins.

console.log(match.index);
// -> 8

console.log("one to 100".match(/\d+/).index);

var quotedText = /'(^)'/;


// Grouping Subexpresions.

// The first and second characters applies only to the second
// o in boo and hoo.
// the third applies to the whole group matches one or more
// patterns like that.
// the i at the end of the expression makes the regular 
// expression case insensitive.

var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohoooo"));

// This regular expression contains subexpressions 
// grouoped in paranthesis.

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

// ["'hello'", "hello"];


// when a group does not en up being matched at all
// its position will undefined. similar to when a group
// is matches multiple times.

console.log(/bad(ly)?)/.exec("bad"));
// ["bad", undefined]

// this matches just the last character.
console.log(/(\d)+/.exec("123"));
//["123", "3"];


// Dates.
console.log(new Date());
// → Wed Dec 04 2013 14:24:57 GMT+0100 (CET)
























 






