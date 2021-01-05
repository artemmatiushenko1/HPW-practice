'use sctrict';
//Task 1
const random = function (min, max) {
    let number;
    if (max === undefined) {
        number = Math.floor(Math.random() * (min + 1));
        return number;
    } else {
        number = Math.floor(Math.random() * (max - min + 1) + min);
        return number;
    }
}

console.log(random(5));


//Task 2
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function (length, characters) {
    function randomIndex() {
        let randomIndex = Math.floor(Math.random() * characters.length);
        return randomIndex;
    }
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters[randomIndex()];
    }
    return key;
};

console.log(generateKey(16, characters));

// Task 4
const iFace = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

let result = [];
for (let key in iFace) {
    if (typeof iFace[key] === 'function') {
        result.push([key, iFace[key].length])
    }
}
console.log(result);

//Task 3

const finalFn = function (ip) {
    const address = ip.split('.').map(num => +num);

    function shift(el, NumberOfTimes) {
        let result = el;
        for (let i = 0; i < NumberOfTimes; i++) {
            result = result << 8;
        }
        return result;
    }

    for (let i = 0, j = 3; i < address.length; i++, j--) {
        address[i] = shift(address[i], j);
    }

    return address.reduce((acc, item) => acc + item, 0);
}

console.log(`The result: ${finalFn('165.225.133.150')}`);
console.log(`The result: ${finalFn('127.0.0.1')}`);
console.log(`The result: ${finalFn('192.168.1.10')}`);
console.log(`The result: ${finalFn('8.8.8.8')}`);
console.log(`The result: ${finalFn('0.0.0.0')}`);