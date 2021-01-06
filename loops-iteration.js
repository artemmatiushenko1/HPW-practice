'use strict';

//Task #1
const sumFor = function (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};
console.log(sumFor(0));

//Task #2
const sumForOf = function (...args) {
    let sum = 0;
    for (let item of args) {
        sum += item;
    }
    return sum;
};
console.log(sumForOf(2, 2, 2));

//Task #3
const sumWhile = function (...args) {
    let sum = 0;
    let counter = 0;
    while (counter < args.length) {
        sum += args[counter];
        counter++;
    }
    return sum;
};
console.log(sumWhile(2, 2, 2));

//Task #4
const sumDoWhile = function (...args) {
    let sum = 0;
    let counter = 0;
    do {
        sum += args[counter];
        counter++;
    } while (counter < args.length);

    return sum;
};
console.log(sumDoWhile(2, 2, 2));

//Task #5
const sumReduce = function (...args) {
    return args.reduce((acc, el) => acc + el, 0);
};
console.log(sumReduce(2));

//Task #6
const findMaxElement = function (arr) {
    let maxVal;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j + 1] > arr[i][j]) {
                maxVal = arr[i][j + 1];
            }
        }
    }
    return maxVal;
};

const m = findMaxElement([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
]);
console.log(m);

//Task #7
const persons = {
    lenin: {
        born: 1870,
        died: 1924
    },
    mao: {
        born: 1893,
        died: 1976
    },
    gandhi: {
        born: 1869,
        died: 1948
    },
    hirohito: {
        born: 1901,
        died: 1989
    },
};

const ages = function (persons) {
    let data = {};
    for (let person in persons) {
        data[person] = persons[person].died - persons[person].born;
    }
    return data;
};

console.log(ages(persons));