// Number data type
var a =10;
console.log(a);
var b =100;
console.log(b);
var a =20;
console.log(a);
var c = 0x1E;//hex value of 30
console.log(c);
var d =0.5;
console.log(d);

// addition
var sum = a + b;
console.log(sum);

// substraction
var diff=d-c;
console.log(diff);

// multiplication
var times= a*d;
console.log(times);

// division
var div=a/d;
console.log(div);

// Modulus
var mod= b%a;
console.log(mod);
var mod= b%c;
console.log(mod);

var e = '20';//not a number but is string
console.log(typeof e);//returns the type of variable e
console.log(a===e);//looking for exact match-strict comparision
console.log(a==e);//looks only at value does nt look for type-loose comparision
//its value is truthy
