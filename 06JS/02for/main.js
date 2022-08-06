// const prompt = require("prompt-sync")();

// let fname = prompt("Enter your first name : ");
// let lname = prompt("Enter your last name : ");

// console.log(`Your Full Name is, ${fname} ${lname}`);

// While
let i = 0;
while (i < 3){
    console.log(i);
    i++;
}


let j = 3;
while(j){
    console.log(j);
    j--;
}

let k = 3;
while(k) console.log(k--);

// Do...while

let q = 0;
do{
    console.log(q);
    q++;
}while(q < 3);

//  For loop
for(let i = 0; i < 3; i++){
    console.log(i);
}

//  // Run begin 
let t = 0;

// if condition => run body and run step
if(t < 3){console.log(t); i++}

// if condition => run body and run step
if(t < 3){console.log(t); i++}

// if condition => run body and run step
if(t < 3){console.log(t); i++}
// FINISH, because now t == 3;

// We can omit begin if we already have a variables
let f = 0;
for(; f < 3; f++){
    console.log(f);
}

// We can omit step if we include it inside the loop
let r = 0;
for(; r < 3;){
    console.log(r++);
}

// We can remove everything from loop and create infinite loop.
// let p = 0;
// for(;;){
//     console.log(p++)
// }


// BREAKING THE LOOP
// const prompt = require("prompt-sync")();

// let sum = 0;
// while(true){
//     let value = +prompt("Enter a number", '');
//     if(!value) break;
//     sum += value;
// }

// console.log(`Sum ${sum}`)

let num2 = 0;
while(num2 < 10){
    num2++;
    console.log(num2);
    if(num2 == 5) break;
}



for(let i = 0; i < 10; i++){
    // If true, skip remaining part of the body
    if(i % 2 == 0) continue;

    console.log(i) // 1, then 3, 5, 7, 9
}


// const prompt = require("prompt-sync")();

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         let input = prompt(`Value at coords (${i},${j})`, '');

//         // what if we want to exit from here to Done(below)?
//     }
// }
// console.log('Done!');

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer; // (*)
  
//       // do something with the value...
//     }
//   }
  
//   alert('Done!');



