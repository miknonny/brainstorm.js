// merge an array of same length.


var merged = function (array1, array2, fn) {
	var merged = [];
	for (var i = 0; i < array1.length; i++) {
		merged.push(fn(array1[i], array2[i]));
	}
	return merged;
};


var mergedArray = merged([1,2,3], [1,2,3], function(x, y) {
	return x * y;
});

console.log(mergedArray);

// lets do this.

var isDivisibleBy3 = function (element) {
	return element % 3 === 0;
};


var mergedDivisibleBy3 = function (array1, array2, fn, isdivisibleby3) {
	var merged = [];
	for (var i = 0; i < array1.length; i++) {
		mergedItem = fn(array1[i], array2[i]);
		if (isDivisibleBy3(mergedItem)) {
			merged.push(mergedItem);
		}
	}
	return merged;
};


var newValue = mergedDivisibleBy3([1,2,3,4], [1,2,3,4], function (x, y) {
	return x * y;
}, mergedDivisibleBy3);

console.log(newValue);

var sumArray = function(array1, array2){
	return merged(array1, array2, function (x, y) {
		return x + y;
	});
};

var anotherValue = sumArray([1, 2, 3, 4], [1, 2, 3, 4]);
console.log(anotherValue);