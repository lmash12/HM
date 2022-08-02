// 1
let q = 10;

if(q == 10){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 2
let min = 45;

if(min <= 0 && min >= 15){
    console.log("первая")
}else if(min > 15 && min <= 30){
    console.log("вторая")
}else if(min > 30 && min <= 45){
    console.log("третья")
}else if(min > 45 && min <= 60){
    console.log("четвертая")
}

// 3 
let a = -3;

if(a == 0){
    console.log("Верно");
}else{
    console.log("Неверно")
}

// 4 
let w = 0;

if(w > 0){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 5 
let e = -3;

if(e < 0){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 6
let r = 4;

if(r >= 0){
    console.log("Верно")
}else{
    console.log("Неверноя")
}

// 7
let t = -10;
if(t <= 0){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 8
let y = 23;
if(y !== 0){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 9
let u = "test";
if(u == "test"){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 10
let i = 1;
if(i === 1){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 11 
let o = 4;
if(o > 0 && o < 5){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// 12
let p = 2;

if(p == 0 || p == 2){
    console.log(p + 7)
}else{
    console.log(p / 10);
}

// 13
let s = 1;
let d = 3;
if(s <= 1 && d >= 3){
    console.log(s + d)
}else{
    console.log(s - d)
}

// 14
let f = 7;
let g = 12;

if(f > 2 && f < 11 || g >= 6 && g < 14){
    console.log("Верно")
}else{
    console.log("Неверно")
}

//  14 ternary
let num1 = 7;
let num2 = 12;
let right = num1 > 2 && num1 < 11 || num2 >= 6 && num2 < 14 ? "Верно" : num1 > 15 && num2 < 12 ? "верно" : "неверно";
console.log(right);




