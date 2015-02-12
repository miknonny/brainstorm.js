var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
			"Thurday", "Friday", "Saturday"];

function dayName(number) {
	return names[number];
}


var dayName = function () {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
			"Thurday", "Friday", "Saturday"];
	return function (number) {
		return names[number];
	};
};

(function() {
  function square(x) { return x * x; }
  var hundred = 100;

  console.log(square(hundred));
})();

// Now imagine that we want to add anther function to our day
// of the week module.
 
var weekDay = function() {
  
  return {
    name: function (number) { return names[number]; },
    number: function (name) {return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number('Sunday')));

 
(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thurday", "Friday", "Saturday"];
  
  exports.name = function (number) {
    return names[number];
  };
  exports.number = function (name) {
    return names.indexOf(name);
  };

})(this.weekDay = {});




















