// 1. find square perimeter
let first = squareSide =>{
    let perimeter = 4 * squareSide;
    return perimeter
}

console.log(first(5));

// 2. find square area
let second = squareSide =>{
    let area = squareSide ** 2;
    return area;
}

console.log(second(5));

// 3. The sides of the rectangle a and b are given. Find its area S = a * b and perimeter P = 2 * (a + b).
let third = (a, b) =>{
    let area = a * b;
    let perimeter = 2 * (a + b);
    return `Area(S): ${area} Perimeter(P): ${perimeter}`;
}

console.log(third(12, 20));

// 4. Given the diameter of the circle d. Find its length L = π * d. the values π use 3.14.
let fourth = diameter =>{
    let length = Math.PI * diameter;
    // return length
    return parseFloat(length.toFixed(2));
}

console.log(fourth(55));

// 5. Given the edge length of cube a. Find the volume of cube V = a³ and its area surfaces S = 6 * a².
let fifth = a =>{
    let volume = a**3;
    let surfaceArea = 6 * a**2;
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
let seventh = radius =>{
    let length = 2 * Math.PI * radius;
    let area = Math.PI * radius**2;
    // return `Length(L): ${length}. Area(S): ${area}`
    return `Length(L): ${parseFloat(length.toFixed(2))} Area(S): ${parseFloat(area.toFixed(2))}`;
}

console.log(seventh(12))

// 8.Given two numbers a and b. Find their arithmetic mean: (a + b)/2.
let eight = (a,b) =>{
    let arithmeticAverage = (a + b) / 2;
    return arithmeticAverage;
}

console.log(eight(25, 10));

// 9. Given two non-negative numbers a and b. Find their geometric mean, that is, the square root of their product
let nine = (a, b) => {
    if(a <= 0 || b <= 0){
        return "Please enter positive number";
    }
    let product = a * b;
    let root = Math.sqrt(product);
    return root;

}

console.log(nine(88, 12));

// 10. Two non-zero numbers are given. Find sum, difference, product and private squares.
let ten = (num1, num2) => {
    if(num1 == 0 || num2 == 0){
        return `Please enter positive or negative number`;
    }

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotientOfSquare = (num1**2) / (num2**2);
    return `Sum: ${sum} Difference: ${difference} Product: ${product} quotientOfSquare: ${quotientOfSquare}`;
}

console.log(ten(12, 4));

// 11. Two non-zero numbers are given. Find the sum, the difference, the product and the quotient of their modules.
let eleven = (a, b) => {
    if(a == 0 || b == 0){
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
    let hypotenuse = Math.sqrt(a**2 + b**2);
    let perimeter = a + b + hypotenuse;
    return `Hypotenuse: ${hypotenuse} Perimeter: ${perimeter}`
};

console.log(twelve(12, 24))

// 13. (r1 > r2)
// let thirteen = (r1, r2) => {
//     let s1 = Math.PI * (r1)**2;
//     let s2 = Math.PI * (r2)**2;
//     let s3 = s1 - s2;
//     return s3
// }

// console.log(thirteen(12, 8));

// // 14. 
// let fourteen = length => {
//     let radius = 2 * Math.PI * length;
//     let area = Math.PI * radius**2
//     return `Radius(R): ${radius} Area(S): ${area}`
// }
// console.log(fourteen(24));

// // 15.
// let fifteen = area => {

// }




