// let countSheep = num =>{
//     for(let i = 1; i <= num; i++){
//         console.log(i);
//     }
// }

// console.log(countSheep(3));

// function countSheep(num){
//     let text = '';
//     for(let i = 1; i <= num; i++){
//         text += `${[i]} sheep...`;
//         console.log(text);
//     }
// }

// countSheep(3);

function countSheep(num){
    let text = '';
    if(num == 0){
      return ""    
    }
  
    for(let i = 1; i <= num; i++){
        text += `${[i]} sheep...`;
    }
    return text
}

// console.log(countSheep(3));

// function squareSum(numbers){
//   numbers.forEach(number => {
//     return number**2;
//   });

//   function sum
// }

// console.log(squareSum([1,2,2]))
