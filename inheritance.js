class Employee { 
    constructor(name, age, salary) { 
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    empInfo() { 
        console.log(`
                Employee Information.
                Name: ${this.name};
                Age : ${this.age};
                Salary : ${this.salary};        
        `)
    }
}

class Manager extends Employee {
    managerInfo() { 
        let ta = 12000;
        let pa = 10000;
        let totalSalary = this.salary + ta + pa;
        console.log(`
                Manager Information.
                Name: ${this.name};
                Age : ${this.age};
                Salary : ${totalSalary};        
        `)
    }
}
 
let a = new Employee('Muhammad Haris', 22, 50000);
a.empInfo();

let b = new Manager('Muhammad Shakir', 22, 70000);
b.managerInfo();
