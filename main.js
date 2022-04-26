let arrayXY = [`o`, `x`, `o`, `x`, `o`, `x`, `o`, `x`, `o`]
let counter = 0;
const allBtn = document.getElementsByClassName("game_btn");
function calculateBut() {
    for (let i = 0; i < allBtn.length; i++) {
        const element = allBtn[i];
        element.onclick = () => {
            if (arrayXY.length == counter) {
                return false;
            } else {
                upNumber(element)
                element.disabled = true
            }
        }
    }
}
calculateBut()

function upNumber(element) {
    element.innerText = `${arrayXY[counter]}`
    element.style = "color:black;font-size:100px;";
    arrayContain();
    counter++;
}

function arrayContain() {
    let filterElemnts = Array.from(allBtn)

    if (allBtn[0].innerHTML == "o" && allBtn[3].innerHTML == "o" && allBtn[6].innerHTML == "o") {
        container.style = "background:red;width: 0.3vw;color:red;height:91vh; margin-left: 19.9vw;font-size:1vw;position:absolute;"   //!{ left colume }
        filterElemnts.forEach(element => element.disabled = true)                                                                     //!{ left colume }
    } if (allBtn[0].innerHTML == "x" && allBtn[3].innerHTML == "x" && allBtn[6].innerHTML == "x") {                                   //!{ left colume }
        container.style = "background:red;width: 0.3vw;color:red;height:91vh; margin-left: 19.9vw;font-size:1vw;position:absolute;"   //!{ left colume }
        filterElemnts.forEach(element => element.disabled = true)                                                                     //!{ left colume }

    } if (allBtn[1].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[7].innerHTML == "o") {                                    //!{ center colume }
        container.style = "background:red;width: 0.3vw;color:red;height:91vh; margin-left: 50.4vw;font-size:1vw;position:absolute;"    //!{ center colume }
        filterElemnts.forEach(element => element.disabled = true)                                                                      //!{ center colume }
    } if (allBtn[1].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[7].innerHTML == "x") {                                    //!{ center colume }
        container.style = "background:red;width: 0.3vw;color:red;height:91vh; margin-left: 50.4vw;font-size:1vw;position:absolute;"    //!{ center colume }
        filterElemnts.forEach(element => element.disabled = true)
    } if (allBtn[2].innerHTML == "o" && allBtn[5].innerHTML == "o" && allBtn[8].innerHTML == "o") {                                    //!{ right colume }
        container.style = "background:red;width: 0.3vw;color:red;height:91vh; margin-left: 80.9vw;font-size:1vw;position:absolute;"    //!{ right colume }
        filterElemnts.forEach(element => element.disabled = true)                                                                      //!{ right colume }
    } if (allBtn[2].innerHTML == "x" && allBtn[5].innerHTML == "x" && allBtn[8].innerHTML == "x") {                                    //!{ right colume }
        container.style = "background:red;width: 0.3vw;color:red;height:91vh; margin-left: 80.9vw;font-size:1vw;position:absolute;"    //!{ right colume }              
        filterElemnts.forEach(element => element.disabled = true)
    }

    if (allBtn[0].innerHTML == "o" && allBtn[1].innerHTML == "o" && allBtn[2].innerHTML == "o") {                                                       //!{ hight row }
        container.style = "background:red;width: 91vw;color:red; height: 0.5vh; margin-left: 5vw;margin-top: 15.9vh; font-size:1vw;position:absolute;"  //!{ hight row }
        filterElemnts.forEach(element => element.disabled = true)                                                                                       //!{ hight row }
    } if (allBtn[0].innerHTML == "x" && allBtn[1].innerHTML == "x" && allBtn[2].innerHTML == "x") {                                                     //!{ hight row }
        container.style = "background:red;width: 91vw;color:red; height: 0.5vh; margin-left: 5vw;margin-top: 15.9vh; font-size:1vw;position:absolute;"  //!{ hight row }              
        filterElemnts.forEach(element => element.disabled = true)}
    if (allBtn[3].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[5].innerHTML == "o") {                                                       //!{ middle row }
        container.style = "background:red;width: 91vw;color:red; height: 0.5vh; margin-left: 5vw;margin-top: 46vh; font-size:1vw;position:absolute;"    //!{ middle row }
        filterElemnts.forEach(element => element.disabled = true)                                                                                       //!{ middle row }
    } if (allBtn[3].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[5].innerHTML == "x") {                                                     //!{ middle row }
        container.style = "background:red;width: 91vw;color:red; height: 0.5vh; margin-left: 5vw;margin-top: 46vh; font-size:1vw;position:absolute;"    //!{ middle row }              
        filterElemnts.forEach(element => element.disabled = true)}
    if (allBtn[6].innerHTML == "o" && allBtn[7].innerHTML == "o" && allBtn[8].innerHTML == "o") {                                                       //!{ down row }
        container.style = "background:red;width: 91vw;color:red; height: 0.5vh; margin-left: 5vw;margin-top: 76vh; font-size:1vw;position:absolute;"    //!{ down row }
        filterElemnts.forEach(element => element.disabled = true)                                                                                       //!{ down row }
    } if (allBtn[6].innerHTML == "x" && allBtn[7].innerHTML == "x" && allBtn[8].innerHTML == "x") {                                                     //!{ down row }
        container.style = "background:red;width: 91vw;color:red; height: 0.5vh; margin-left: 5vw;margin-top: 76vh; font-size:1vw;position:absolute;"    //!{ down row }              
        filterElemnts.forEach(element => element.disabled = true)
    }

    if (allBtn[0].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[8].innerHTML == "o") {                                                       //!{ hight row }
        container.style = "background:red;width: 95vw;color:red; height: 0.5vh; margin-left: 3vw;margin-top: 45.5vh; font-size:1vw;position:absolute;transform: rotate(24deg);"  //!{ hight row }
        filterElemnts.forEach(element => element.disabled = true)                                                                                       //!{ hight row }
    } if (allBtn[0].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[8].innerHTML == "x") {                                                     //!{ hight row }
        container.style = "background:red;width: 95vw;color:red; height: 0.5vh; margin-left: 3vw;margin-top: 45.5vh; font-size:1vw;position:absolute;transform: rotate(24deg);"  //!{ hight row }              
        filterElemnts.forEach(element => element.disabled = true)}

        if (allBtn[2].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[6].innerHTML == "o") {                                                       //!{ hight row }
        container.style = "background:red;width: 95vw;color:red; height: 0.5vh; margin-left: 3vw;margin-top: 45.5vh; font-size:1vw;position:absolute;transform: rotate(-24deg);"  //!{ hight row }
            filterElemnts.forEach(element => element.disabled = true)                                                                                       //!{ hight row }
        } if (allBtn[2].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[6].innerHTML == "x") {                                                     //!{ hight row }
        container.style = "background:red;width: 95vw;color:red; height: 0.5vh; margin-left: 3vw;margin-top: 45.5vh; font-size:1vw;position:absolute;transform: rotate(-24deg);"  //!{ hight row }              
            filterElemnts.forEach(element => element.disabled = true)}

}

