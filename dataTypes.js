'use strict';
// Task 4

const obj = {
    1: 1,
    2: 2
};
const fun = function () {
    console.log("Hello world!")
};

class Employee {
    constructor() {
        this.name = '';
        this.dept = 'general'
    }
};

const emp = new Employee;

const array = ["artem", 125, true, false, "Kyiv", 122, 133, 1000, true, obj, fun, emp, Employee];

let typesObject = {
    string: 0,
    number: 0,
    boolean: 0,
    object: 0,
    function: 0
}

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
        typesObject.string += 1;
    } else if (typeof array[i] === 'number') {
        typesObject.number += 1;
    } else if (typeof array[i] === 'boolean') {
        typesObject.boolean += 1;
    } else if (typeof array[i] === 'object') {
        typesObject.object += 1;
    } else if (typeof array[i] === 'function') {
        typesObject.function += 1;
    }
};

console.log(typesObject);

//Second way
let typesObject2 = {};
for (const element of array) {
    if (!typesObject2[`${typeof element}`]) {
        typesObject2[`${typeof element}`] = 0
    }
    typesObject2[`${typeof element}`]++;
}
console.log(typesObject2)

// Task 1
let number = 2;
const sumFun = function () {
    return number * number;
}

console.log(sumFun());

// Task 2

function inc(n) {
    if (typeof n !== 'number') {
        return 'n is not a number';
    }
    return n;
}

const a = 5;
const b = inc(a);

console.dir({
    a,
    b
});

function inc2(num) {
    if (typeof num !== 'object') {
        return 'num is not an object';
    }
    return num.n = 10;
}

const obj1 = {
    n: 5
};

inc2(obj1);

console.dir(obj1);