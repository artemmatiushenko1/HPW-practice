'use strict';

const arrayNum = [1, 2, 3, 4, 5, 6, 7];
const arrayStr = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

//Task #1
const removeOneElement = function (array, item) {
    const indexOfItem = array.indexOf(item);
    if (indexOfItem !== -1) {
        array.splice(indexOfItem, 1);
    }
}

//Task #2
const removeFewElements = function (array, ...itemN) {
    for (let i = 0; i < itemN.length; i++) {
        if (array.indexOf(itemN[i]) !== -1) {
            array.splice(array.indexOf(itemN[i]), 1)
        }
    }
}

console.log(arrayNum);
removeFewElements(arrayNum, -1, 2, 2.5, 8);
console.log(arrayNum);

console.log(arrayStr);
removeFewElements(arrayStr, 'Lima')
console.log(arrayStr);

//Task #3
const unique = function (array) {
    return Array.from(new Set(array));
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);

//Task #4
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

const difference = function (array1, array2) {
    let diffElements = [];
    for (const el of array1) {
        if (!array2.includes(el) && !diffElements.includes(el)) {
            diffElements.push(el);
        }
    }

    return diffElements;
}

const result2 = difference(array1, array2);
console.log(result2);

const array1Str = ['Beijing', 'Kiev'];
const array2Str = ['Kiev', 'London', 'Baghdad'];
const result3 = difference(array1Str, array2Str);
console.log(result3);