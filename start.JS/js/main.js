//Ejemplo 1
/*var start = '{"favColor":"Orange", "FavSeason":"Fall"}';
var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);

var myObject = JSON.parse(myString);
console.log(myObject);*/

//Ejemplo 2
/*var theData1 = '{"first":"Paul", "last":"Cheney", "city":"Salem"}';
var myObj = JSON.parse(theData1);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.last;*/

//Ejemplo 3
/*var theData2 = '{"Jane":{"age":"29","degree":"MFA"}, "Jim":{"age":"49","degree":"MA"}}';
var myObj = JSON.parse(theData2);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.Jim.age;*/

//Ejemplo 4
/*var theData2 = '{"Jane":{"age":"29","degree":{"AAS":"VMI", "BA":"UVA"}}, "Jim":{"age":"49","degree":"MA"}}';
var myObj = JSON.parse(theData2);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.Jane.degree.BA;*/
