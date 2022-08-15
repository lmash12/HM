const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const boxColor = document.querySelector(".box");
const warning = document.getElementById("warn");
const goLang = document.querySelector(".go__container");
const go = document.getElementById("goBoy");
const headerTraffic = document.getElementById("trafficH");
const containerDiv = document.querySelector(".container__div");

let counter = 0;

plus.addEventListener('click', () => {
    counter++
    counter = (counter == 10) ? 1 : counter++;
    num.innerHTML = counter;
    changeBoxBg()
    console.log(counter)
});

minus.addEventListener('click', () => {
    counter--;
    counter = (counter == 0) ? 9 : counter--;
    num.innerHTML = counter;
    changeBoxBg()
    console.log(counter)
});

function changeBoxBg() {
    if (counter == 1 || counter == 2 || counter == 3) {
        boxColor.style.background = "#BD3F32";
        boxColor.style.borderRadius = "0%";
        boxColor.style.transition = "all 1s";
        warning.innerHTML = "STOP!";
        goLang.style.filter = "opacity(0)";
        headerTraffic.innerHTML = "Traffic Light";
        containerDiv.style.padding = "160px 20px"

    } else if (counter == 4 || counter == 5 || counter == 6) {
        boxColor.style.background = "#F2C94C";
        boxColor.style.borderRadius = "30%";
        boxColor.style.transition = "all 1s";
        warning.innerHTML = "WAIT FOR IT BUDDY!";
        goLang.style.filter = "opacity(0)";
        headerTraffic.innerHTML = "Traffic Light";
        go.style.width = "200px";
        containerDiv.style.padding = "160px 20px"
    } else {
        boxColor.style.background = "#237A57";
        boxColor.style.borderRadius = "50%";
        boxColor.style.transition = "all 1s";
        warning.innerHTML = "Go!";
        goLang.style.filter = "opacity(1)";
    }
};

go.addEventListener("click", () => {
    headerTraffic.innerHTML = "You found a go-boy MALADES"
    go.style.width = "500px";
    containerDiv.style.padding = "50px 20px"
})




