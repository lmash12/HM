// 1. Объединить массивы
let arrStr = ['a', 'b', 'c'];
let arrNum = [1, 2, 3];

// let mixArr = arrStr.concat(arrNum);
let mixArr = [...arrStr, ...arrNum];
console.log(mixArr);



// 2.
let arrStr2 = ['a', 'b', 'c'];
arrStr2.push(1, 2, 3);


console.log(arrStr2);

// 3.
let arrNum3 = [1, 2, 3];
arrNum3.push(4, 5, 6);
console.log(arrNum3)

// 4. 
let arrNum4 = [1, 2, 3];
arrNum4.unshift(4, 5, 6);
console.log(arrNum4);

// 5. 
let arrStr5 = ['js', `css`, 'jq'];
// console.log(arrStr5.shift());
console.log(arrStr5[0]);

// 6.
// console.log(arrStr5.pop());
console.log(arrStr5[2]);

// 7.
let arrNum7 = [3, 4, 5];
arrNum7.pop();
console.log(arrNum7);

// 8.
let arrNum8 = [1, 2, 3];
arrNum8.shift();
console.log(arrNum8);

// 9.
let arrNum9 = [];

for (let i = 1; i <= 100; i++) {
    if ([i] % 2 == 0) {
        arrNum9.push([i]);
    }
}
console.log(arrNum9);

// 10. 
let arrMix = [1, "hello", true, 2, '4', false];
let arrStr10 = [];
let arrNum10 = [];
let arrBool10 = [];

for (let i = 0; i < arrMix.length; i++) {
    if (typeof arrMix[i] == 'number') {
        arrNum10.push(arrMix[i])
    }
    if (typeof arrMix[i] == 'string') {
        arrStr10.push(arrMix[i])
    }
    if (typeof arrMix[i] == 'boolean') {
        arrBool10.push(arrMix[i]);
    }
}



console.log(arrNum10);
console.log(arrStr10);
console.log(arrBool10);

// ARRAY 

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

fruits[2] = "Cocos";
console.log(fruits);

let kashaArr = ["Apple", { name: 'John' }, true, function () { console.log('hello') }];
console.log(kashaArr[1].name);

console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1)); // AT

// Push add to last 
fruits.push("Pear");
console.log(fruits);

// Unshift add to first
fruits.unshift("Watermelon");
console.log(fruits);

// Push and Unshift can add multiple elements at once
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
console.log(fruits);

let arrFruit = fruits;

console.log(arrFruit === fruits);
arrFruit.push("Strawberry");
console.log(fruits);

let arrSmthng = [];
arrSmthng[999999] = 5;
arrSmthng.age = 25;
console.log(arrSmthng);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

for (let key in fruits) {
    console.log(fruits[key]);
}

let arrNUmNUm = [1, 2, 3, 4, 5];
arrNUmNUm.length = 2;
console.log(arrNUmNUm);

arrNUmNUm.length = 5;
console.log(arrNUmNUm[3]);

// let nwArr = new Array("Apple", "Pear", "etc");
let nwArr = new Array(2);
console.log(nwArr[0]);
console.log(nwArr.length);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]);

let arrToStr = [1, 2, 3];
console.log(arrToStr);
console.log(String(arrToStr) === '1,2,3');
console.log([] + 1);
console.log([1] + 1);
console.log([1, 2] + 1);

console.log("" + 1);
console.log("1" + 1);
console.log("1,2" + 1);

let arrStyles = ['Jazz', 'Blues'];

arrStyles.push("Rock-n-Roll");

// arrStyles[1] = "Classics";
arrStyles[Math.floor((arrStyles.length - 1) / 2)] = 'Classics';

console.log(arrStyles.shift());
console.log(arrStyles);

arrStyles.unshift("Rap", "Reggae");

console.log(arrStyles);