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
    // if (counter == 10) {
    //     counter = 1;
    // }
    // num.innerHTML = counter;

    // WITH INPUT  
    inputNumber.value = Number(counter);
    changeBoxBg();
    console.log(counter);
});

minus.addEventListener('click', () => {
    counter--;
    counter = (counter <= 0) ? 9 : counter--;

    // WITH SPAN
    // if (counter == 0 || counter < 0) {
    //     counter = 9;
    // }
    // num.innerHTML = counter;

    // WITH INPUT
    inputNumber.value = counter;
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
go.addEventListener("click", () => {
    headerTraffic.innerHTML = "You found a go-boy. <br>Kandota zan";
    go.style.width = "400px";
    containerDiv.style.padding = "50px 20px";
    titleHTML.innerHTML = "Go Boy";
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