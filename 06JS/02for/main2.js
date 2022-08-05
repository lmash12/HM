// 1. Четные нечетные
for(let number = 1; number <= 100; number++){
    if(number % 2 !== 0){
        continue;
    }
    console.log(number)
}

// 2. Создайте переменную а и запустите цикл до 100 когда n % 2 == 0 Прибавьте значение цикла на а
let a = 0;
for(let n = 1; n <= 100; n++){
    if(n % 2 === 0){
        a += n;
    }
    console.log(a)
}


// 3. Создайте переменную b = 10 и запустите цикл до 50, когда значение цикла будет равен b, выйдите из цикла
let b = 10;
for(let i = 0; i <= 50; i++){
    if(i == b){
        break;
    }
    console.log(i);
}

// 4. Создайте переменную с=30; запустите цикл до 100  и пропускайте пока значение цикла не будет равен с;
let c = 30;
for(let i = 0; i <= 100; i++){
    if(i != c){
        continue;
    }
    console.log(i);
}

let text = "This is a hard work!!!";
let number = 0;
// 5. Найдите количество символа 'а' в тексте используя цикл
for(let i = 0; i <= text.length; i++){
    if(text.charAt(i) === 'a'){
        number++;
    }else{
        continue;
    }
}
console.log(`В строке найдено ${number} символов а`);

// 6. Найдите позицию символа 'w'
for(let i = 0; i <= text.length; i++){
    if(text.charAt(i) == 'w')
    console.log(text.indexOf('w'));
}

// 7. Замените пробелы на символ F
for(let i = 0; i <= text.length; i++){
    let whiteSpace = text;
    if(whiteSpace.charAt(i) == " "){
    whiteSpace.replace(/\s/g, 'f');
    }
    console.log(whiteSpace);
}

// let whiteSpace = "This is a hard work!!!";
// console.log(whiteSpace);
// console.log(whiteSpace.replace(/\s/g, 'f'));

// const name1 = 'Hi my name is Flavio'
// console.log(name1);
// console.log(name1.replace(/\s/g, '')); //HimynameisFlavio
    
    // if(text.indexOf("w")){
    //     str += 
    // }
// }

// const index = text.indexOf('w');
// console.log(`${index} iss`);


// const index = text.charAt(8);
// console.log(index)
// const index = 8;
// console.log(`The character at index ${index} is ${text.charAt(8)}`);

