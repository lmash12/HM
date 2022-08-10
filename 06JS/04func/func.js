let minNum = (a, b) => {
    if (a < b) {
        return a
    } else {
        return b;
    }
}

console.log(minNum(2, 5))
console.log(minNum(3, -1))
console.log(minNum(1, 1))

let powNum = (a, b) => {
    return a ** b;
}

console.log(powNum(3, 2));
console.log(powNum(3, 3));
console.log(powNum(1, 100));

// 
// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

// function showOk(){
//     alert('You agreed.')
// }

// function showCancel(){
//     alert("You canceled the execution");
// }

// ask("Do you agree?", showOk, showCancel);

//  Clean it
function pow(x, n) { // 1 error
    let result = 1; // 2 error
    for (let i = 0; i < n; i++) { //3 error
        result *= x;
    }
    return result
}


// 1. Создайте функцию которая выводит 'Hello World!'

function sayHello() {
    return 'Hello World!'
}
console.log(sayHello());

// 2. Создайте самовызывающую функцию которая выводит `Я учу HTML CSS JS`
(function whatILearn() {
    console.log('Я учу HTML CSS JS');
})();

(function () {
    console.log("Я учу HTML CSS JS REACT");
})();

// 3. Создайте функцию у которого есть 2 аргумента a и b и выводит эти значения в консоль
function getArgument(a, b) {
    console.log(a, b)
}

getArgument(2, 2);

// 4 Создайте функцию plus которая суммирует два значения a b
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 2));

// 5 Функция которая возвращает 1 если четное 2 если нечет
function oddOrEven(a) {
    if (a % 2 == 0) {
        return "Odd"
    } else {
        return "Even"
    }
}

console.log(oddOrEven(2));

// 6. Создайте функцию которая находит максимальное число массива
let numArr = [32, 57, 103, 110, 310, 400, 220, 1, 9, 87, 42];
let arrNumbers = [1, 23, 44, 120, 3000, 5000, 75];

function maxNumArr(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }

    return maxNum;
}

console.log(maxNumArr(numArr));
console.log(maxNumArr(arrNumbers));

// 7. Создайте функцию которая переворачивает значение стринга. Например значение = test, после функции значение == "tset";

function reversString(str) {
    let revers = "";
    for (let i = 1; i <= str.length; i++) {
        let countIndex = str.length;
        revers += str[countIndex - [i]];
    }

    return revers;
}

console.log(reversString('1234567890'));


function reverseStr(str) {
    let revers = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }

    return revers;
}

console.log(reverseStr("test"));

// function reversString1(str) {
//     let revers = "";
//     for (let i = 0; i <= str.length; i++) {
//         let countIndex = str.length;
//         revers += str[countIndex - [i]];
//     }
//     return revers
// }

// console.log(reversString1("test"));



// const arrArr = [1, 2, 3, 4, 5, 61, 211, 7334, 112, 552];


// function maxNumFromArr(arr) {
//     let max = 10;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//             continue
//         }
//     }
//     return max;
// }

// console.log(maxNumFromArr(arrArr));



// Second version of 6
// function maxNumber(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }