var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!'); },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};


var fakeSanta  = {
	sayHoHoHo: function () { console.log('Ho Ho Ho!'); },
	distributeGifts: function () { console.log('Gifts for all'); },
	goDownheChimney: function() { console.log('*whoosh*'); },
	fuckYou: function () { console.log('go fuck your self'); }
};

var isSantaClausable = function (obj) {
	var checks = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
	return checks.every(function (item) {
		return (obj.hasOwnProperty(item) || typeof obj[item] == 'function');	
	});
};

console.log(isSantaClausable(santa));
console.log(isSantaClausable(fakeSanta));

multiplicationTable = function (size) {
	var matrix = [];
	
};
