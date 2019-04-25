var a= 'Hello world!';
console.log(a);
// c. output only the first word (i.e `Hello`)

// d. output only the second word (i.e. `World`)

var str1='Hello';
var str2='World';

console.log(str1);
console.log(str2);

var car= "Honda";//camel casing naming convention- main variables in project
var model="Civic";//snake naming convention-properties inside object
console.log(car,model);

var carModel=car+'  '+model;
console.log(carModel);

var carModel=car+model;
console.log(carModel);

var carModel=car.concat(' ',model);
console.log(carModel);

var carModel=car.concat( ' ').concat(model);
console.log(carModel);