"use strict";

// Many variables
let user = 'Islom', age = 25, message = 'Hello';
console.log(user)
console.log(age)
console.log(message)

// Refresh variable
let greeter;
greeter = 'Hello';
greeter = 'World!';
console.log(greeter)

// Variable = Variable
let hello = 'Hello World!';
let message1;
message1 = hello;

let admin;
let name;
name = 'John';
admin = name;
console.log(admin);

// False
console.log(1 / 0) 
console.log(NaN);
console.log(Infinity);
console.log("string" / 2);


// Bat tick
let firstName = "Islom";
let secondName = "Sattorov";
let greeter4 = `Hello my name is ${firstName} ${secondName}`
console.log(greeter4);

// Alert, prompt, confirm

// let result = prompt("How old are you?")
// alert(result);

// let age2 = prompt('How old are you?', 18);
// alert(`You are ${age2} years old!`);

// let isBoss = confirm("Are you the boss?");
// alert(isBoss); 

// let userName = prompt("What is your name", "user");
// alert(userName);

// let areYouIslom = confirm("Are you Islom?");
// alert(areYouIslom);

// let userAge = prompt("How old are you?", 18);
// let userName = confirm("Are you Islom?");

// if(userAge >= 18 && userName == true){
//     alert("You are welcome Mr. Islom");
// }else if(userAge < 18){
//     alert("Bye")
// }

// if(userAge < 18){
//     alert("Bye");
// }else if(userAge >= 18 && userName == true){
//     alert("You are Welcome Mr. Islom")
// }

//  Convertation

let a = 1;
let b = 1;
let c = ++a; 
let d = b++; 
console.log(c)
console.log(d)

let h = "" + 1 + 0;
let q = "" - 1 + 0;
let w = true + false;
let e = 6 / "3";
let r = "2" * "3";
let t = 4 + 5 + "px";
let y = "$" + 4 + 5;
let u = "4" - 2;
let i = "4px" - 2;
let o = "  -9  " + 5;
let p = "  -9  " - 5;
let s = null + 1;
let f = undefined + 1;
let g = " \t \n" - 2; 
console.log(h); // 10
console.log(q); // -1
console.log(w); // 1
console.log(e); // 2
console.log(r); // 6
console.log(t); // 9px
console.log(y); // $45
console.log(u); // 2
console.log(i); // NaN
console.log(o); // -9 5
console.log(p); // -14
console.log(s); //  1
console.log(f); // NaN
console.log(g); // -2

// Alert Number

// let m = prompt("First number?", 1);
// let n = prompt("Second number?", 2);
// alert(+m + +n);


// Sravnenie
console.log("Z" > "A");
console.log("A" > "Z");
console.log("2" > 1);
console.log("1" > 2);
console.log(5 > 4) // true
console.log("apple" > "pineapple") // false
console.log("2" > "12") // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n") // false


// Condition
let year = 2022;
if(year < 2010){
    console.log("Old")
}else if(year > 2010){
    console.log("Young")
}

// Ternary operator
let agi = 23;
let agiResult = (agi < 18) ? "Islom" : "NeIslom";
console.log(agiResult);

// Complex ternary operator
let message6 = age < 3 ? 'Hi, baby!' :
  age < 18 ? 'Hello!' :
  age < 100 ? 'Greetings!' :
  'What an unusual age!';
console.log(message6);

// Practice 
let k = 1, l = 1;

let res = (k + l < 4) ? 'Below' : 'Over';
console.log(res)

let login = "Employee"

let message8 = (login == 'Employee') ? "Hello" : (login == "Director") ? "Greetings" : (login == "") ? "No login" : "";
console.log(message8);

// Logical operator
console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // 1 , 2
console.log(1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // 1, undefined
console.log(null || 2 && 3 || 4) // 3 precendence of && higher than of ||


// Condition Practice
let age99 = 13;
if(age99 >= 14 && age99 <= 90){
    console.log("Between 14 and 90")
}else{
    console.log("I don't give a fuck")
}

let age10 = 12;
if(age10 < 14 || age10 > 90){
    console.log("Not between 14 and 90");
}else{
    console.log("Between 14 and 90");
}

let age12 = 12;
if(!(age12 >= 14 && age12 <= 90)){
    console.log("Between")
}else{
    console.log("Not between")
}


if(-1 || 0) console.log('first'); // First true pass
if(-1 && 0) console.log('second'); // Second false not pass
if(null || -1 && 1) console.log('third'); // && both true pass


//  Test
// let userAt = prompt("Who's there");

// if(userAt == undefined){
//     alert("Canceled")
// }else if(userAt == "Other"){
//     alert("I dont know you");
// }else if(userAt == "Admin"){
//     let password = prompt("Password");

//     if(password == undefined){
//         alert("Canceled")
//     }else if(password == "Other"){
//         alert("Wrong password")
//     }else if(password == "TheMaster"){
//         alert("Welcome")
//     }

// }

let a1 = 2;
let b2 = 1;
console.log(a1 ?? b2);
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

let result2 = (a1 !== null && a1 !== undefined) ? a1 : b1;


