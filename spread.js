let subMarks = [90, 99, 92, 94, 95];

let totalMarks = (name, degree, ...nums) => { 
    let sum = 0;
    for (let i in nums) { 
        sum += nums[i];
    }
    return `${name}, ${degree}, scored : ${sum}`;
}

console.log(totalMarks('M.Shakir', 'BS-SE', ...subMarks))

// lets concat two arrays using spread opt.

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80, 90, 100];

let arr3 = [...arr1,...arr2];
console.log(arr3);

// let's concat two obejcts using spread opt.

let obj1 = {
    name: "Muhammad Shakir",
    age: 21,
    degree: "BS-SE"
}

let obj2 = {
    email: "MuhammadShakirdev@gmail.com",
    github: "MuhammadShakir-dev",
    profession: "Front-end Developer"
}

let usrInfo = { ...obj1, ...obj2 };
console.log(usrInfo);
