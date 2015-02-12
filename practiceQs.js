
/*
1. Write a function called merge, that takes two arrays of numbers, both of 
which are the same length, and a callback. 
*/

var merge = function(array1, array2, callback){ //where the arrays are the same length

};


/*
The callback is going to be passed each item in array1 and array2, in 
turn, and somehow combine them into one value. An example of such a 
callback is:

var myExampleCallback = function(element1, element2){
  return element1 + element2;
};

When merge is implemented, 
merge([1, 2, 3, 4], [5, 6, 7, 8], myExampleCallback) should return 
[6, 8, 10, 12];
*/


/*
2. Implement mergeIf. mergeIf should return an array of only the merged
elements that pass a truthTest. 

var isDivisibleByThree = function(element){
  return element%3 === 0;
}

margeIf([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){
  return a + b;
}, isDivisibleByThree); should return [6, 12]

*/

var mergeIf = function(array1, array2, callback, truthTest){

};

/*
3. Now implement a function called sumArray USING YOUR MERGE FUNCTION 
(no loops allowed),  that takes two arrays of the same length, and 
sums them together. 
For example, sumArray([1, 2, 3, 4], [5, 6, 7, 8]) should return 
[6, 8, 10, 12];
*/

var sumArray = function(array1, array2){
	merged(array1, array2, function (x, y) {
		return x + y;
	});
};


