'use strict';
// Task 1
let name = 'Artem';

//Task 2
const birthYear = 2003;

//Task 3
const greet = function (name) {
    console.log(`Hello ${name}!`);
}

greet(name);

//Task 4
// Only odd numbers
const range1 = function (start, end) {
    const arr = [];
    const arrLength = end - start;
    const min = start;
    const max = end;

    function getRandomNumber() {
        let number = Math.floor(Math.random() * (max - min + 1) + min);

        if (number % 2 === 0) {
            if (number === max) {
                return number -= 1;
            } else {
                return number += 1;
            }
        } else {
            return number;
        }
    }

    for (let i = 0; i < arrLength; i++) {
        arr.push(getRandomNumber());
    }

    return arr.join(', ');
}

console.log(range1(15, 30));

//Task 5
// Range2 function gives any random numbers
const range2 = function (start, end) {
    let arr = [];
    let arrLength = end - start;
    let min = start;
    let max = end;

    function getRandomNumber() {
        let number = Math.floor(Math.random() * (max - min + 1) + min);
        return number;
    }

    for (let i = 0; i < arrLength; i++) {
        arr.push(getRandomNumber());
    }

    return arr.join(', ');
}

console.log(range2(15, 30));

// Task 6
const average = function (a, b) {
    return (a + b) / 2;
}

const square = x => {
    return x * x;
}

const cube = function (x) {
    return x * x * x;
}

const calculate = function () {
    let result = [];
    for (let i = 0; i <= 9; i++) {
        result.push(average(square(i), cube(i)));
    }

    return result;
};

console.log(calculate());

// Task 8
const createUser = function (name, city) {
    return {
        name,
        city
    }
}

console.log(createUser('Artem', 'Cherkassy'));

// Task 9
const phoneBook = [{
    name: 'Artem',
    phone: '0974563201'
}, {
    name: 'Anton',
    phone: '0975624302'
}, {
    name: 'Mom',
    phone: '0975625002'
}, {
    name: 'Dad',
    phone: '0975424302'
}];

const findPhoneByName = function (name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return `That's ${phoneBook[i].name}'s phone number: ${phoneBook[i].phone}`;
        }
    }
}

const findPhoneByName2 = function (name) {
    const number = phoneBook.find(person => person.name === name).phone;
    return number;
}

const phoneBook2 = {};
for (let i = 0; i < phoneBook.length; i++) {
    phoneBook2[`${phoneBook[i].name}`] = phoneBook[i].phone;
}

const findPhoneByName3 = function (name) {
    return phoneBook2[name];
}

console.log(findPhoneByName('Mom'));
console.log(findPhoneByName2('Dad'));
console.log(findPhoneByName3('Artem'));