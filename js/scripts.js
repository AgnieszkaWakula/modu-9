// scripts.js

function getTriangleArea(a, h) {

 if (a>0 || h>0) {
		return a*h/2;
} else {
    return 'Nieprawidłowe dane';

}

}
getTriangleArea(10,6);
console.log(getTriangleArea(-10,6));


var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(10,4);
var triangle3Area = getTriangleArea(10,2);



var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName)===-1) {
	var newName = allNames.push('Marian');
}
console.log(allNames);