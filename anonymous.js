// Something with reduce.

// Something interesting.



//philivwer haverbeke is included in the data file.
// pauwels van haverbeke i my direct ancestor.
//and if powels is my direct ancestor how much dna 
// do i share with him.

var byName = {};

ancestry.forEach(function(person) {
	// we can not use the dot notation.
	byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

// {name: "Philibert Haverbeke"};

// There are special cases in the family tree where
// people married their second cousins and all that


var reduceAncestors = function (person, f, defaultValue) {
	function valueFor (person) {
		if (person === null) {
			return defaultValue;
		} else {
			return f(person, valueFor(byName[person.mother])),
				valueFor(byName[person.father]);
		}
	}
};