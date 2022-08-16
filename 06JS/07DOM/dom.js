const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const boxColor = document.querySelector(".box");
const warning = document.getElementById("warn");
const goLang = document.querySelector(".go__container");
const go = document.getElementById("goBoy");
const headerTraffic = document.getElementById("trafficH");
const containerDiv = document.querySelector(".container__div");
const titleHTML = document.querySelector(".title");

// Title link
function setFavicons(favImg) {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
}

setFavicons('./favicon_io__white/favicon-32x32.png');

// Golang PIC
goLang.style.filter = "opacity(0)";

// BTN
let counter = 0;

plus.addEventListener('click', () => {
    counter++
    counter = (counter == 10) ? 1 : counter++;
    // if (counter == 10) {
    //     counter = 1;
    // }
    num.innerHTML = counter;
    changeBoxBg()
    console.log(counter)
});

minus.addEventListener('click', () => {
    counter--;
    counter = (counter <= 0) ? 9 : counter--;
    // if (counter == 0 || counter < 0) {
    //     counter = 9;
    // }
    num.innerHTML = counter;
    changeBoxBg()
    console.log(counter)
});



// Function Change box BG

function changeBoxBg() {
    if (counter == 1 || counter == 2 || counter == 3) {
        boxColor.style.background = "#BD3F32";
        boxColor.style.borderRadius = "0%";
        boxColor.style.transition = "all 1s";
        warning.innerHTML = "STOP!";
        warning.style.padding = "15px 0 0 0"
        goLang.style.filter = "opacity(0)";
        headerTraffic.innerHTML = "Traffic Light";
        containerDiv.style.padding = "160px 20px";
        titleHTML.innerHTML = "Red";
        setFavicons('./favicon_io__red/favicon-32x32.png');
    } else if (counter == 4 || counter == 5 || counter == 6) {
        boxColor.style.background = "#F2C94C";
        boxColor.style.borderRadius = "30%";
        boxColor.style.transition = "all 1s";
        warning.innerHTML = "WAIT FOR IT BUDDY!";
        warning.style.padding = "0";
        goLang.style.filter = "opacity(0)";
        headerTraffic.innerHTML = "Traffic Light";
        go.style.width = "200px";
        containerDiv.style.padding = "160px 20px";
        titleHTML.innerHTML = "Yellow";
        setFavicons('./favicon_io__yellow/favicon-32x32.png')
    } else {
        boxColor.style.background = "#237A57";
        boxColor.style.borderRadius = "50%";
        boxColor.style.transition = "all 1s";
        warning.innerHTML = "Go!";
        warning.style.padding = "20px 0 0 0";
        goLang.style.filter = "opacity(1)";
        titleHTML.innerHTML = "Green";
        setFavicons('./favicon_io__green/favicon-32x32.png')
    }
};

// Go interactive
go.addEventListener("click", () => {
    headerTraffic.innerHTML = "You found a go-boy MALADES";
    go.style.width = "500px";
    containerDiv.style.padding = "50px 20px";
    titleHTML.innerHTML = "Go Boy";
})




