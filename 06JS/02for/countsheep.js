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

let countSheep = num => {
    let text = '';
    for(let i = 1; i <= num; i++){
        text += `${[i]} sheep...`;
        console.log(text);
    }
}

countSheep(0);