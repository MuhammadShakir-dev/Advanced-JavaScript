let demo = {
    name: 'Muhammad Shakir',
    age: 21,
    education: 'Undergraduate'
}

// now I don't want to write demo.name and demo.age every time to acces the value.

let { name, age, education } = demo;
console.log(`${name}, ${age}, ${education}`);
