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
    let reg = /\s/g;
    if(text.charAt(i) == " ")
    console.log(text.replace(reg, 'f'));
}

// 8. Count Sheep 
let countSheep = num => {
    let text = '';
    if(num == 0){
        return ""
    }

    for(let i = 1; i <= num; i++){
        text += `${[i]} sheep...`;
    }
    return text;
}

console.log(countSheep(3));

// STRING

const noSpace = x => {
    let reg = /\s/g;
    return x.replace(reg, "")
}


// "a" 7;
// "o" 10;
// "н" 20;
// Найдите кол во символов и умножьте колво на значение символа и в конце прибавьте все три значения

let text2 = "Я изучаю программирование!";
let countA = 0;
let countO = 0;
let countH = 0;
for(let i = 0; i < text2.length; i++){
    if(text2[i] == "а"){
        countA += 7;
    }
    if(text2[i] == "о"){
        countO += 10;
    }
    if(text2[i] == "н"){
        countH +=20;
    }
}




let result = countA + countO + countH;


console.log(result);

// ARRAY

let qwe = () =>{
let arr = [1,2,3];
let arr2 = [4,5,6];
let mixArr = [...arr,...arr2];
console.log(mixArr);
}

let arr = [1, 3, 4, 'Текст', 'Другой текст', false];
let numberArr;
let stringArr;
let booleansArr;

for(let i = 0; i < 0; i++){
    if(typeof arr[i] === 'string'){
        stringArr.push(arr[i]);
    }
    if(typeof arr[i] === 'number'){
        numberArr.push(arr[i]);
    }
    if(typeof arr[i] === 'boolean'){
        booleansArr.push(arr[i]);
    }
}


console.log('number', numberArr, 'string', stringArr, 'boolean', booleansArr);
