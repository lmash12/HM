// 1USD = 10.20

// Vasya 1000 TJS
// Ivan 150 TJS
// Anton 230 TJS
// Jony 1234 USD
// Max 333 USD
// John 780 USD
// Umed 280 TJS

// Part 1
// 1. Создайте данные объекты
// 2. Создайте массив persons и в нем добавьте эти объекты
// 3. Создайте новый массив richMens и добавьте людей у которых сумма больше 500
// 4. Просуммируйте все суммы массива RichMens

// Part 2
// 1. Создайте данные объекты
// 2. Создайте массив persons и в него добавьте 
// 3. Просуммирруйте все суммы массивав persons и найдите результат в сомони

let user1 = {
    name: "vasya",
    balance: 1000,
    currency: "TJS"
}

let user2 = {
    name: "ivan",
    balance: 150,
    currency: "TJS"
}

let user3 = {
    name: "anton",
    balance: 230,
    currency: "TJS"
}

let user4 = {
    name: "jony",
    balance: 1234,
    currency: "USD"
}

let user5 = {
    name: "max",
    balance: 333,
    currency: "USD"
}

let user6 = {
    name: "john",
    balance: 780,
    currency: "USD"
}

let user7 = {
    name: "umed",
    balance: 280,
    currency: "TJS"
}

let user8 = {
    name: "islom",
    balance: 6020,
    currency: "USD"
}

let persons = [user1, user2, user3, user4, user5, user6, user7, user8];

let richMens = [];

function findRichMens() {
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].balance > 500) {
            richMens.push(persons[i])
        }
    }
    return richMens;
}

console.log(findRichMens());


function sumRichMensMoney() {
    let sum = 0;
    for (let i = 0; i < richMens.length; i++) {
        sum += richMens[i].balance
    }
    return sum
}

console.log(sumRichMensMoney());


function sumTJS() {
    let sum = 0;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].currency == "USD") {
            sum += persons[i].balance * 10.20;
            continue;
        }
        if (persons[i].currency == "TJS") {
            sum += persons[i].balance;
        }
    }
    return Number(sum.toFixed(2));
}

console.log(sumTJS());



let user10 = {
    name: "Islom",
    age: 23,
    isDeveloper: true,
    online: true,
}

delete user10.online;

console.log(user10);



// let user11 = {
//     name: "Islom",
//     age: 23,
// }

// let key = prompt("What do you want to know about the user?", "age")

// alert(user11[key]);

// console.log(user11);


// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//     [fruit]: 5
// };

// alert(bag.apple); // 5 if fruit="apple"


function makeUser(name, age) {
    return {
        name,
        age,
        // other properties
    };
}

let user12 = makeUser('Islom', 23);
let user13 = makeUser('Usmon', 24);

console.log(user12.age)
console.log(user13.name);

let obj = {
    for: 1,
    let: 2,
    return: 3,
    const: 4,
}

console.log(obj.for + obj.let + obj.return + obj.const); // 10

let obj2 = {
    0: "test",
}

console.log(obj2["0"]);
console.log(obj2[0]);

let obj3 = {}

obj3.__proto__ = 5;

console.log(obj3.__proto__)


let user14 = { name: "islom", age: 23, };

console.log("name" in user14); // true
console.log("age" in user14); // true
console.log("blabla" in user14); // false bcs user14.blabla doesnt exist

let user15 = { age: 23, };
let key2 = "age";
let key3 = "voice";
console.log(key2 in user15); // true
console.log(key3 in user15);  // false

let obj4 = {
    test: undefined,
};

console.log(obj4.test); // undefined
console.log("test" in obj4); // true

let user16 = {
    name: "Islom",
    age: 23,
    isAdmin: true,
};

for (let key in user16) {
    // keys
    console.log(key);  // name, age, isAdmin
    // values for the keys
    console.log(user16[key]);
}

for (let prop in user16) {
    console.log(prop);
    console.log(user16[prop]);
}

let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    992: "Tajikistan",
    7: "Russia",
    8: "China",
    1: "USA"
};

for (let code in codes) {
    console.log(code);
}


// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that remove the decimal part

console.log(String(Math.trunc(Number("49")))); // "49" same integer property
console.log(String(Math.trunc(Number("+49")))); // "49" not same "+49" => not integer property
console.log(String(Math.trunc(Number("1.2")))); // "1" not same "1.2" => not integer property

let user17 = {
    name: "islom",
    surname: "sattorov",
}

user17.age = 23;

for (let prop in user17) {
    console.log(prop)
}

let codes2 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    //...
    "+1": "USA",
};

for (let code in codes2) {
    console.log(+code); // 49, 41, 44, 1
}


// Hello, object

let user18 = {};

user18.name = "Islom";
user18.surname = "Sattorov";
user18.name = "Usmon";
delete user18.name;

console.log(user18)


// Check for emptiness

let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true
}


console.log(isEmpty(schedule));

schedule.name = "Name";

console.log(isEmpty(schedule));

// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function sumSalaries(obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;

}

console.log(sumSalaries(salaries));

// multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu))
