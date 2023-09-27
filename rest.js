function totalMarks(name, ...nums) { 
    let sum = 0;
    for (let i in nums) { 
        sum += nums[i];
    }

    return `${name} : your total no are : ${sum}`;
}

console.log(totalMarks('Muhammad Shakir', 80, 80, 90, 98, 88));
