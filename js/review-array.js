var fruit=['Mango','pineapple','grapes'];
console.log(fruit);

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

//add fruit at the begining

fruit.unshift('orange');
console.log(fruit);


// add fruit at the end
fruit.push('Banana');
console.log(fruit);

//replace third fruit with new one

fruit.splice(3,1,'blue-berries');
console.log(fruit);

//remove second fruit

fruit.splice(2,1);
console.log(fruit);

//makes acopy of fruit to fruit1

var fruit1=fruit.slice();
console.log(fruit1);


