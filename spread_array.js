var arr = [2, 3, 4, 5];
var arr1 = [74, 7, 5];

var arr2 = [...arr, ...arr1];

var obj = { country: "welcome india" };
var obj2 = { country_code: 68594 };

var obj3 = { ...obj, ...obj2 };

console.log(obj3);
console.log(arr2);


