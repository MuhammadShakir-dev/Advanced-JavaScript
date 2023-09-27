// What is destructutring ?
// Destructuring is like. objects and array sa value bahir nikalna and unka dosray variables mein store karna.

let arr = ["M.Shakir", "BS-SE", 22];

// now i want to store every value of this array inside of variable.
// In ES5 we will do this.

let name = arr[0];
let degree = arr[1];
let age = arr[2];

console.log(name);
console.log(degree);
console.log(age);

// In ES6 we can do this like.

let [usrName, usrEducation, usrAge] = arr;
console.log(`${usrName}, ${usrEducation}, ${usrAge}`);




