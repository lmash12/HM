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



