// old way to creating objects in js.

let name = "Muhammad Shakir";
let course = "Web development bootcamp";

let usrInfo = {
    name: name,
    course: course
}

console.log(usrInfo);

// In ES6 you if your obj key name and property name are same.
// then you don't read to write this two time.

let usrData = {
    name,
    course
}

console.log(usrData);

// Now let's see how you can use your variable value as property.
// in your object and assign value to it.

let n = "name";
let a = "age";
let g = "gender";

let demo = {
    [n]: "Muhammad Shakir",
    [a]: 21,
    [g]: "Male"
}

console.log(demo);

// you can also modify the property names.

let demo1 = {
    ["stundent" + n]: "Muhammad Shakir",
    ["stundent" + a]: 21,
    ["student" + g]: "Male"
}

console.log(demo1);

