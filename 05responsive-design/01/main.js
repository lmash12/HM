"use strict";

let user = 'Islom', age = 25, message = 'Hello';
console.log(user)
console.log(age)
console.log(message)

let greeter;
greeter = 'Hello';
greeter = 'World!';
console.log(greeter)

let hello = 'Hello World!';
let message1;

message1 = hello;


let admin;
let name;
name = 'John';
admin = name;
console.log(admin);

let earth;
let currentUserName;

const birthday = '18.04.1982';

console.log(1/0)
console.log(NaN);
console.log(Infinity);

console.log("string" / 2);


let firstName = "Islom";
let secondName = "Sattorov";
let greeter4 = `Hello my name is ${firstName} ${secondName}`
console.log(greeter4);


let name4 = "Islom";
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name4}`);

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

// let m = prompt("First number?", 1);
// let n = prompt("Second number?", 2);
// alert(+m + +n);

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

let year = 2022;
if(year < 2010){
    console.log("Old")
}else if(year > 2010){
    console.log("Young")
}

let agi = 23;
let agiResult = (agi < 18) ? "Islom" : "NeIslom";
console.log(agiResult);

let message6 = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
console.log(message6);

// let company = "Netscape"

// (company == "Netscape") ? 
// console.log("Right!") : console.log("Wrong.");

if("0"){
    console.log("hello!");
}

let JSName = "ECMAScript";

if(JSName == "ECMAScript"){
    console.log("Right")
}else{
    console.log("You dont know? 'ECMAScript'!");
}

let k = 1, l = 1;

let res = (k + l < 4) ? 'Below' : 'Over';
console.log(res)

let login = "Employee"

let message8 = (login == 'Employee') ? "Hello" : (login == "Director") ? "Greetings" : (login == "") ? "No login" : "";
console.log(message8);

