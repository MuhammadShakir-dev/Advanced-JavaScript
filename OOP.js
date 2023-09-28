// Problem no 1: Animal Hierarchy.

class Animal { 
    constructor(name, age) { 
        this.name = name;
        this.age = age;
        console.log(`Your pet ${this.name} and there age is ${this.age}`);        
    }
}

class Dog extends Animal { 
    dogFood() { 
        let listOfDogFoods = ['Bone Broth', 'Organ Meats', 'Mushrooms']
        console.log(`Here are some healthy food for your dog : ${listOfDogFoods}`);
    }
}

class Cat extends Animal { 
    catFood() { 
        let listOfCatFoods = ['Cucumbers', 'Cooked Lean Meats', 'Cooked Fish'];
        console.log(`Here are some healthy food for your cat : ${listOfCatFoods}`);
    }
}

let subDog = new Dog('Bully','2 years');
subDog.dogFood();

let subCat = new Cat('Leena', '6 Months');
subCat.catFood(); 


// Problem no:2 Shapes Hierarchy.   
/*
Create a base class Shape with properties like color and area(). 
Then create subclasses like Circle and Square that inherit from 
Shape and have their own methods for calculating area.
*/

class Shap { 
    constructor(shapName, shapColor) { 
        this.name = shapName;
        this.color = shapColor;
        console.log(`${this.name} of color ${this.color}`);   
    }
}

class Circle extends Shap { 
    areaOfCricle(radius) { 
        this.radius = radius;
        let totalArea = Math.PI * (this.radius * this.radius);
        console.log(`The area of circle is : ${totalArea}`);
    }
}

class Square extends Shap {
    areaOfSquare(a) { 
        this.diameter = a;
        let areaOfAllSides = this.diameter * this.diameter;
        console.log(`The total area of square is : ${areaOfAllSides}`);
    }
}
 
let subSqaure = new Square('Sqaure', 'red');
subSqaure.areaOfSquare(4);

setTimeout(() => {
    let subCircle = new Circle('Circle', 'Blue');
    subCircle.areaOfCricle(4);
}, 1000);


