//array data type

var arr1 =[];//empty array
var arr2=[1,2];
console.log(arr2);
console.log(arr2[1]);
console.log(arr2[2]);

var arr3=['hi','hello','there'];

console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2]);
console.log(arr3.length);

var arr3=['hi','hello','there'];

var arr4=[ 10,40,'abc','xyz','true']

arr3.push('Welcome');
console.log(arr3);

console.log(arr3[arr3.length-1]);

arr3.unshift('greeting');
console.log(arr3);

arr3.splice(2, 1, 'pravallika');
console.log(arr3);
arr3.splice(2,2);
console.log(arr3);

arr3.splice(2,2,'pravalika','ammineni');
console.log(arr3);

arr3.splice(2,0,'hola');
console.log(arr3);

arr4.pop();//remove last item of array
console.log(arr4);

arr4.shift();//remove first item
console.log(arr4);

var arr5=arr4.slice();
console.log(arr5);

var arr6=arr4;
arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);


var arr7=arr4.slice(1,3);
console.log(arr7);