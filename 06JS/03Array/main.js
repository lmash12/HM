// 1. Объединить массивы
let arrStr = ['a', 'b', 'c'];
let arrNum = [1, 2, 3];

// let mixArr = arrStr.concat(arrNum);
let mixArr = [...arrStr, ...arrNum];
console.log(mixArr);



// 2.
let arrStr2 = ['a','b','c'];
arrStr2.push(1,2,3);


console.log(arrStr2);

// 3.
let arrNum3 = [1,2,3];
arrNum3.push(4,5,6);
console.log(arrNum3)

// 4. 
let arrNum4 = [1,2,3];
arrNum4.unshift(4,5,6);
console.log(arrNum4);

// 5. 
let arrStr5 = ['js', `css`, 'jq'];
// console.log(arrStr5.shift());
console.log(arrStr5[0]);

// 6.
// console.log(arrStr5.pop());
console.log(arrStr5[2]);

// 7.
let arrNum7 = [3,4,5];
arrNum7.pop();
console.log(arrNum7);

// 8.
let arrNum8 = [1,2,3];
arrNum8.shift();
console.log(arrNum8);

// 9.
let arrNum9 = [];

for(let i = 1; i <= 100; i++){
    if([i] % 2 == 0){
        arrNum9.push([i]);
    }
}
console.log(arrNum9);

// 10. 
let arrMix = [1, "hello", true, 2, '4', false];
let arrStr10 = [];
let arrNum10 = [];
let arrBool10 = [];

for(let i = 0; i < arrMix.length; i++){
    if(typeof arrMix[i] == 'number'){
        arrNum10.push(arrMix[i])
    }
    if(typeof arrMix[i] == 'string'){
        arrStr10.push(arrMix[i])
    }
    if(typeof arrMix[i] == 'boolean'){
        arrBool10.push(arrMix[i]);
    }
}



console.log(arrNum10);
console.log(arrStr10);
console.log(arrBool10);