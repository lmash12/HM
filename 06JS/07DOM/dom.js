const plus = document.querySelector(".plus"); // BTN PLUS
const minus = document.querySelector(".minus"); // BTN MINUS
const num = document.querySelector(".num"); // SPAN COUNTER
const boxColor = document.querySelector(".box"); // BOX
const warning = document.getElementById("warn"); // WARNING TEXT
const goLang = document.querySelector(".go__container"); // CONTAINER FOR GO IMG
const go = document.getElementById("goBoy"); // IMG GO BOY
const headerTraffic = document.getElementById("trafficH"); // H1 TEXT
const containerDiv = document.querySelector(".container__div"); // MAIN CONTAINER
const titleHTML = document.querySelector(".title"); // TITLE
const headerFour = document.getElementById("aSync"); // HEADER 4
const inputNumber = document.getElementById('numberCount'); // INPUT NUMBER
const switchBtn = document.querySelector(".toggleBtn"); // Toggle button for switch span and input number 


// Switch Span and Input
let listener = true;

switchBtn.addEventListener('click', () => {

    if (listener == true) {
        num.style.display = "block";
        inputNumber.style.display = "none";
        switchBtn.innerHTML = "Switch to Input Number"
        listener = false;
    } else if (listener == false) {
        num.style.display = "none";
        inputNumber.style.display = "block";
        switchBtn.innerHTML = "Switch to Span"
        listener = true
    }
});


// Interval Header
headerFour.style.opacity = "0";

function timeUp() {
    headerFour.style.opacity = "1";
}

function timeUpFade() {
    headerFour.style.opacity = "0";
}

let intervalId = setInterval(timeUp, 9000);
let intervalId2 = setInterval(timeUpFade, 18000);


setFavicons('./favicon_io__white/favicon-32x32.png');


// BTN
let counter = 1;

plus.addEventListener('click', () => {
    counter++
    counter = (counter > 9) ? 1 : counter++;

    // WITH SPAN
    if (counter == 10) {
        counter = 1;
    }
    num.innerHTML = counter;

    // WITH INPUT  
    inputNumber.value = Number(counter);
    changeBoxBg();
    console.log(counter);
});

minus.addEventListener('click', () => {
    counter--;
    counter = (counter <= 0) ? 9 : counter--;

    // WITH SPAN
    if (counter == 0 || counter < 0) {
        counter = 9;
    }
    num.innerHTML = counter;

    // WITH INPUT
    inputNumber.value = Number(counter);
    changeBoxBg();
    console.log(counter);
});


// Default 
boxColor.style.background = "#BD3F32";
warning.innerHTML = "STOP!";

// Function Change box BG
function changeBoxBg() {
    if (counter == 1 || counter == 2 || counter == 3) {
        redBox();
        setFavicons('./favicon_io__red/favicon-32x32.png');
    } else if (counter == 4 || counter == 5 || counter == 6) {
        yellowBox();
        setFavicons('./favicon_io__yellow/favicon-32x32.png');
    } else {
        greenBox();
        setFavicons('./favicon_io__green/favicon-32x32.png');
    }
};

// Golang PIC
goLang.style.filter = "opacity(0)";

// Go interactive
let goListener = true;

go.addEventListener("click", () => {
    if (goListener == true) {
        goListener = false
        headerTraffic.innerHTML = "You found a go-boy. <br>Kandota zan";
        go.style.width = "400px";
        containerDiv.style.padding = "50px 20px";
        titleHTML.innerHTML = "Go Boy";
    } else if (goListener == false) {
        goListener = true;
        goLang.style.filter = "opacity(0)";
        go.style.width = "205px";
        containerDiv.style.padding = "149px 20px";
        headerTraffic.innerHTML = "Traffic Light";
    }
})

// Functions
// Title link
function setFavicons(favImg) {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
}

function redBox() {
    boxColor.style.background = "#BD3F32";
    boxColor.style.borderRadius = "0%";
    boxColor.style.transition = "all 1s";
    warning.innerHTML = "STOP!";
    warning.style.padding = "15px 0 0 0"
    goLang.style.filter = "opacity(0)";
    go.style.width = "205px";
    headerTraffic.innerHTML = "Traffic Light";
    containerDiv.style.padding = "149px 20px";
    titleHTML.innerHTML = "Red";
};

function yellowBox() {
    boxColor.style.background = "#F2C94C";
    boxColor.style.borderRadius = "30%";
    boxColor.style.transition = "all 1s";
    warning.innerHTML = "WAIT FOR IT BUDDY!";
    warning.style.padding = "0";
    goLang.style.filter = "opacity(0)";
    headerTraffic.innerHTML = "Traffic Light";
    go.style.width = "205px";
    containerDiv.style.padding = "149px 20px";
    titleHTML.innerHTML = "Yellow";
};

function greenBox() {
    boxColor.style.background = "#237A57";
    boxColor.style.borderRadius = "50%";
    boxColor.style.transition = "all 1s";
    warning.innerHTML = "Go!";
    warning.style.padding = "20px 0 0 0";
    goLang.style.filter = "opacity(1)";
    titleHTML.innerHTML = "Green";
};



// TEST 

// let testBtn = document.getElementById("eventObject");

// testBtn.addEventListener('click', e => {
//     console.log(e.type)
// });

// let link = document.querySelector('a');

// link.addEventListener('click', e => {
//     console.log('clicked');
//     e.preventDefault();
// })

// let testBtn2 = document.getElementById("eventObject2");

// testBtn2.addEventListener('click', e => {
//     console.log('The button was clicked!');
//     e.stopPropagation();
// })

// document.body.addEventListener("click", e => {
//     console.log("The body was clicked");
// })

// Bubbling, Capturing, e.stopPropagation, Once, RemoveEvent

// let grandParent = document.querySelector(".grandParent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// grandParent.addEventListener("click", e => {
//     console.log("Grand parent Capture");
//     grandParent.style.background = "orange"
//     e.stopPropagation();
// });

// parent.addEventListener("click", printHi)

// setTimeout(() => {
//     parent.removeEventListener('click', printHi)
// }, 2000);


// child.addEventListener("click", e => {
//     console.log("Child 1");
//     child.style.background = "aqua";
//     e.stopPropagation();
// }, { once: true });

// document.addEventListener("click", e => {
//     console.log("Document 1");
// });

// function printHi() {
//     console.log("Hi")
// }



const allDivs = document.querySelectorAll('div');

// document.addEventListener("click", e => {
//     if (e.target.matches("div")) {
//         console.log("hi");
//     }
// })

addGlobalEventListener("click", "div", e => {
    console.log("hi");
})

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}

// allDivs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log("h1");
//     })
// })

// const newDiv = document.createElement("div");
// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.background = "purple";
// document.body.append(newDiv);
