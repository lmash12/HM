let a = 6;

switch(a){
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Right!');
        break;
    case 5:
        console.log("Too big");
    case 6:
        console.log("WTF")
        break;
    default:
        console.log("I dont know")
}

let clientCheck = browser =>{
    if(browser === 'Edge' || browser === 'Firefox' || browser === 'Safari' || browser === "Opera"){
        return `Okay we support these browser`
    }else{
        return `We hope that this page look ok!`;
    }
}

console.log(clientCheck("OK"));

let b = 0;
switch(b){
    case 0:
        console.log("Zero")
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Number");
}




