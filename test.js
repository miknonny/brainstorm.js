// Redoing map.

var map = function (arr, fn) {
	var newArray = [];
	arr.forEach(function (i) {
		newArray.push(fn(i));
	});
	return newArray;
};


var result = map([1, 2, 3, 4, 5], function (x) {
	return x * x;
});
console.log(result);