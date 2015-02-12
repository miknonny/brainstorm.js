var array = [[1, 2, 3], [4, 5], [6]];

var values = array.reduce(function (x, y) {
	return x.concat(y);
});


console.log(values);
