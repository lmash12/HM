// 1. find square perimeter
let first = squareSide => {
    let perimeter = 4 * squareSide;
    return perimeter
}

console.log(first(5));

// 2. find square area
let second = squareSide => {
    let area = squareSide ** 2;
    return area;
}

console.log(second(5));

// 3. The sides of the rectangle a and b are given. Find its area S = a * b and perimeter P = 2 * (a + b).
let third = (a, b) => {
    let area = a * b;
    let perimeter = 2 * (a + b);
    return `Area(S): ${area} Perimeter(P): ${perimeter}`;
}

console.log(third(12, 20));

// 4. Given the diameter of the circle d. Find its length L = π * d. the values π use 3.14.
let fourth = diameter => {
    let length = Math.PI * diameter;
    // return length
    return parseFloat(length.toFixed(2));
}

console.log(fourth(55));

// 5. Given the edge length of cube a. Find the volume of cube V = a³ and its area surfaces S = 6 * a².
let fifth = a => {
    let volume = a ** 3;
    let surfaceArea = 6 * a ** 2;
    return `Volume(V): ${volume} Surface area(S): ${surfaceArea}`;
}

console.log(fifth(4));

// 6. Given rib lengths a, b, c rectangular parallelepiped. Find its volume V = a * b * c and the surface area S = 2 (a * b + b * c + a * c).
let sixth = (a, b, c) => {
    let volume = a * b * c;
    let surfaceArea = 2 * (a * b + b * c + a * c);
    return `Volume(V): ${volume} Surface area(S): ${surfaceArea}`;
}

console.log(sixth(2, 4, 6));

// 7. Find the circumference length L and the circle area S of a given radius R: L = 2 * π * R, S = π * R².
let seventh = radius => {
    let length = 2 * Math.PI * radius;
    let area = Math.PI * radius ** 2;
    // return `Length(L): ${length}. Area(S): ${area}`
    return `Length(L): ${parseFloat(length.toFixed(2))} Area(S): ${parseFloat(area.toFixed(2))}`;
}

console.log(seventh(12))

// 8.Given two numbers a and b. Find their arithmetic mean: (a + b)/2.
let eight = (a, b) => {
    let arithmeticAverage = (a + b) / 2;
    return arithmeticAverage;
}

console.log(eight(25, 10));

// 9. Given two non-negative numbers a and b. Find their geometric mean, that is, the square root of their product
let nine = (a, b) => {
    if (a <= 0 || b <= 0) {
        return "Please enter positive number";
    }
    let product = a * b;
    let root = Math.sqrt(product);
    return root;

}

console.log(nine(88, 12));

// 10. Two non-zero numbers are given. Find sum, difference, product and private squares.
let ten = (num1, num2) => {
    if (num1 == 0 || num2 == 0) {
        return `Please enter positive or negative number`;
    }

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotientOfSquare = (num1 ** 2) / (num2 ** 2);
    return `Sum: ${sum} Difference: ${difference} Product: ${product} quotientOfSquare: ${quotientOfSquare}`;
}

console.log(ten(12, 4));

// 11. Two non-zero numbers are given. Find the sum, the difference, the product and the quotient of their modules.
let eleven = (a, b) => {
    if (a == 0 || b == 0) {
        return "Please enter positive or negative number"
    }
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotientOfModule = Math.abs(a / b);
    return `Sum: ${sum} Difference: ${difference} Product: ${product} quotientOfModule: ${quotientOfModule}`;
}

console.log(eleven(-65, 30));

// 12. The legs of the rectangular triangle a and b are given. Find its hypotenuse c and perimeter P
let twelve = (a, b) => {
    let hypotenuse = Math.sqrt(a ** 2 + b ** 2);
    let perimeter = a + b + hypotenuse;
    return `Hypotenuse: ${hypotenuse} Perimeter: ${perimeter}`
};

console.log(twelve(12, 24))

// 13. (r1 > r2)
let thirteen = (r1, r2) => {
    let s1 = Math.PI * (r1) ** 2;
    let s2 = Math.PI * (r2) ** 2;
    let s3 = s1 - s2;
    return s3;
}

console.log(thirteen(12, 8));

// 14. 
let fourteen = length => {
    let radius = length * 2 * Math.PI;
    let area = Math.PI * radius ** 2;
    return `Radius: ${radius} Area: ${area}`;
}

console.log(fourteen(2));

// 15. 
let fifteen = area => {
    let radius = Math.sqrt(area * Math.PI);
    let length = 2 * Math.PI * radius;
    return `Radius: ${radius} Length: ${length}`;
}

console.log(fifteen(12));

// 16. Найти расстояние между двумя точками с заданными координатами х1 х2 на числовой оси х2 - х1
let sixteen = (x1, x2) => {
    let horizontalDistance = Math.sqrt((x2 - x1) ** 2);
    return horizontalDistance;
}

console.log(sixteen(3, 7));

// 17. Даны три точки A B C на числовой оси. Найти длины отрезков AC и BC и их сумму
let seventeen = (a, b, c) => {
    let ac = Math.abs(a - c);
    let bc = Math.abs(b - c);
    let x = ac + bc;
    return x;
}

console.log(seventeen(12, 15, 17));

// Boolean 

// 1. 
let bool1 = 10;
console.log(bool1 > 0);

// 2. 
let bool2 = 3;
console.log(bool2 % 2 != 0);

// 3. 
let bool3 = 4;
console.log(bool3 % 2 == 0);

// 4.
let bool4 = (a, b) => {
    return a > 2 && b <= 3;
}

console.log(bool4(3, 3));

// 5. 
let bool5 = (a, b) => {
    return a >= 0 || b < -2;
}

console.log(bool5(0, -4));

// 6.
let bool6 = (a, b, c) => {
    return a < b < c;
}
console.log(bool6(1, 2, 3));

// 7. 
let bool7 = (a, b, c) => {
    return b < c && b > a;
}

console.log(bool7(10, 12, 15));

// 8.
let bool8 = (a, b) => {
    return a % 2 !== 0 && b % 2 !== 0;
}

console.log(bool8(3, 5));

// 9.
let bool9 = (a, b) => {
    return a % 2 !== 0 || b % 2 !== 0;
}
console.log(bool9(3, 6));

// 10.




