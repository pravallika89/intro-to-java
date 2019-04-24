var str1 = "It's tuesday today";
// console.log(str1);
var str2='It\'s tuesday today';
// console.log(str2);
console.log(str1,str2);

var firstName= "Pravallika";//camel casing naming convention- main variables in project
var last_name="Ammineni";//snake naming convention-properties inside object
console.log(firstName,last_name);

var fullName=firstName+'  '+last_name;
console.log(fullName);

var fullName=firstName+last_name;
console.log(fullName);

var fullName=firstName.concat(' ',last_name);
console.log(fullName);

var fullName=firstName.concat( ' ').concat(last_name);
console.log(fullName);