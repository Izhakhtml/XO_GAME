const allBtn = document.getElementsByClassName("game_btn");
const arrayXY = [`o`, `x`, `o`, `x`, `o`, `x`, `o`, `x`, `o`]
let existIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let filterElemnts = Array.from(allBtn)
let counter = 0;
let xoGame = document.body;
let bool = false;
let whichTypeGame = false
let stringData = "";
let typeGame = ""

xoGame.addEventListener('load', initalizationPopUp())
function initalizationPopUp() {
    entrance.style =
        `
    width: 40vw;
    height: 40vh;
    background: white;
    z-index:1;
    position: absolute;
    margin-left: 30vw;
    margin-top: 25vh;
    border:2px solid black;
    opacity: 1;
    `
    entrance.innerHTML = "<article id='warpBtns'><button onclick=chooseTypeGame('Yourself')>Against Yourself</button> <button onclick=chooseTypeGame('Computer')>Against Computer</button></article>"
}
function chooseTypeGame(str) {
    if (str == "Yourself") {
        typeGame = "Yourself";
        container_popUp.innerHTML = "";
        whichTypeGame = true
        calculateBut();
    } if (str == "Computer") {
        typeGame = "Computer";
        container_popUp.innerHTML = "";
        calculateBut();
    }
}
function calculateBut() {
    if (typeGame == "Yourself") {
        console.log("Yourself");
        for (let i = 0; i < allBtn.length; i++) {
            const element = allBtn[i];
            element.onclick = () => {
                if (arrayXY.length == counter) {
                    console.log("arrayXY.length");
                    return false;
                } else {
                    upNumber(element)
                }
            }
        }
    } if (typeGame == "Computer") {
        console.log("Computer");
        for (let i = 0; i < allBtn.length; i++) {
            const element = allBtn[i];
            element.onclick = () => {
                if (arrayXY.length == counter) {
                    console.log("arrayXY.length");
                    return false;
                } else {
                    upNumber(element)
                    if (bool != true) {
                        setTimeOutAuth(i) //! against computer
                    }
                }
            }
        }
    } else {
        console.log("no one");
    }
}
function upNumber(element) {
    element.innerText = `${arrayXY[counter]}`;
    element.style = "color:black;font-size:100px;";
    element.disabled = true;
    stringData = "o"
    arrayContain();
    counter++;
}
function getElemnts(params) {
    return params.forEach(element => element.disabled = true)
}
function getContainerStyle(height, leftMargin, whigth, topMargin = 0, deg = 0) {
    return container.style = `background:red;color:red;position:absolute;font-size:1vw;
                              height:${height};margin-left:${leftMargin};
                              width:${whigth};margin-top:${topMargin};transform: rotate(${deg})`
}
function checkCurrentText() {
    let currentString = arrayXY[counter]
    console.log(counter);
    if (currentString == "x") {
        stringData = "x"
    } else {
        stringData = "o"
    }
}
function arrayContain() {
    if (whichTypeGame == true) {
        checkCurrentText()
    }
    if (allBtn[0].innerHTML == stringData && allBtn[3].innerHTML == stringData && allBtn[6].innerHTML == stringData) {  //! coulme
        getElemnts(filterElemnts);
        getContainerStyle("91vh", "19.9vw", " 0.3vw")
        bool = true;
    }
    if (allBtn[1].innerHTML == stringData && allBtn[4].innerHTML == stringData && allBtn[7].innerHTML == stringData) { //! coulme        
        getElemnts(filterElemnts);
        getContainerStyle("91vh", "50.4vw", "0.3vw")
        bool = true;
    }

    if (allBtn[2].innerHTML == stringData && allBtn[5].innerHTML == stringData && allBtn[8].innerHTML == stringData) { //! coulme
        getElemnts(filterElemnts);
        getContainerStyle("91vh", "80.9vw", " 0.3vw")
        bool = true;
    }

    if (allBtn[0].innerHTML == stringData && allBtn[1].innerHTML == stringData && allBtn[2].innerHTML == stringData) { //! row
        getElemnts(filterElemnts);
        getContainerStyle("0.5vh", " 5vw", "91vw", "15.9vh;")
        bool = true;
    }
    if (allBtn[3].innerHTML == stringData && allBtn[4].innerHTML == stringData && allBtn[5].innerHTML == stringData) { //! row                                                 
        getElemnts(filterElemnts);
        getContainerStyle("0.5vh", " 5vw", "91vw", "46vh;")
        bool = true;
    }

    if (allBtn[6].innerHTML == stringData && allBtn[7].innerHTML == stringData && allBtn[8].innerHTML == stringData) { //! row   
        getElemnts(filterElemnts);
        getContainerStyle("0.5vh", " 5vw", "91vw", "76vh;")
        bool = true;
    }

    if (allBtn[0].innerHTML == stringData && allBtn[4].innerHTML == stringData && allBtn[8].innerHTML == stringData) { //! slantLine                                              
        getElemnts(filterElemnts);
        getContainerStyle("0.5vh", "3vw", "95vw", "45.5vh", "24deg")
        bool = true;
    }
    if (allBtn[2].innerHTML == stringData && allBtn[4].innerHTML == stringData && allBtn[6].innerHTML == stringData) { //! slantLine                                                    
        getElemnts(filterElemnts);
        getContainerStyle("0.5vh", "3vw", "95vw", "45.5vh", "-24deg")
        bool = true;
    }
}

//! play against computer
function setTimeOutAuth(elment) {

    existIndex.splice(existIndex.indexOf(elment), 1)
    window.setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 8)
        for (let i = 0; i < existIndex.length; i++) {
            if (existIndex[i] == randomNumber) {
                filterElemnts[randomNumber].innerText = arrayXY[counter]
                filterElemnts[randomNumber].style = "color:black;font-size:100px;";
                stringData = "x"
                arrayContain();
                filterElemnts[randomNumber].disabled = true;
                existIndex.splice(existIndex.indexOf(randomNumber), 1)
                counter++;
                return;
            }
            if (2 > existIndex.length - 1) {
                let lastNumber = existIndex[0]
                if (arrayXY.length == counter) {
                    return false;
                } else {
                    filterElemnts[lastNumber].innerText = `${arrayXY[counter]}`
                    filterElemnts[lastNumber].style = "color:black;font-size:100px;";
                    stringData = "x"
                    arrayContain();
                    counter++;
                    return;
                }
            }
            if (i == existIndex.length - 1) {
                let max = Math.max(...existIndex)
                randomNumber = Math.floor(Math.random() * max)
                i = 0;
            }

        }
    }, 500)

}
