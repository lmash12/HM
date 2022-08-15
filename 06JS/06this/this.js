let user20 = { name: "Islom" };
let user21 = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
user20.f = sayHi;
user21.f = sayHi;

// these calls have different THIS
// THIS inside the function is the object "before the dot"
user20.f(); // Islom (this == user20);
user21.f(); // Admin (this == user21);

user21["f"](); // Admin(dot or square brackets access the method - doesn't matter)



// console.log('Просто в программе');
// console.log(this); // ССЫЛАЕТСЯ НА WINDOW
// console.log(this.innerHeight) // Inner height метод window,так как в этом контексте this ссылается на window мы можем взаимодействовать его методами


// function abc() {
//     console.log("Внутри функции");
//     console.log(this);
//     console.log(3 + 5 / 2);
//     this.style.background = "purple";
//     this.style.color = "white";
//     this.style.padding = "5px";
// }

// // abc();

// // document.querySelector("p").onclick = abc;

// // let p = document.querySelectorAll('p');
// // p.forEach(function (element) {
// //     element.onclick = abc;
// // })

// document.querySelector("p").addEventListener("click", abc);


// let p = document.querySelectorAll('p');
// p.forEach(function (element) {
//     element.addEventListener("click", abc);
// })

// // THIS , CALL, BIND, APPLY

// function hello() {
//     console.log('Hello', this);
// }

// const person = {
//     name: "islom",
//     age: 23,
//     sayHello: hello,
// }


function hello() {
    console.log("Hello", this)
}

const person = {
    name: "Islom",
    age: 23,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${this.job}`);
        console.log(`Phone is ${this.phone}`);
        console.groupEnd();
    }
}


const dasha = {
    name: "Dasha",
    age: 19,
}

person.logInfo.bind(dasha)();




