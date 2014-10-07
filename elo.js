// callbacks


var iterator = function (x) {
	return x*2;
};

var map = function (array, fn) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(fn(array[i]));
	}
	return newArray;
};


var mapResult = map([1, 2, 3, 4, 5], function (x) {
	return x*2;
});

// console.log(mapResult);

var reduce = function (array, fn) {
	var prev = array[0];
	for (var i = 1; i < array.length; i += 1) {
		var next = array[i];
		prev = fn(prev, next);
	}
	return prev;
};


var x = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (prev, next) {
	return prev * next;
});

// console.log(x);


// doing a reduce from the last item.
// 
var reduceRight = function (array, fn) {
	
	var arrayIndex = array.length - 1, 
			lastItem = array[arrayIndex];
	for (var i = (arrayIndex - 1); i >= 0; i--) {
		var prev = array[i];
		lastItem = fn(lastItem, array[i]);
	}
	return lastItem;
};


var y = reduceRight([8, 9, 15, 4], function (x, y) {
	return x + y;
});	

// console.log(y);