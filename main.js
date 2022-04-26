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
function get(params) {
    return params.forEach(element => element.disabled = true)
}
function getContainerStyle(height, leftMargin, whigth,topMargin = 0,deg = 0) {
    return container.style = `background:red;color:red;position:absolute;font-size:1vw;
                              height:${height};margin-left:${leftMargin};
                              width:${whigth};margin-top:${topMargin};transform: rotate(${deg})`
}
function arrayContain() {
    let filterElemnts = Array.from(allBtn)

      if (allBtn[0].innerHTML == "o" && allBtn[3].innerHTML == "o" && allBtn[6].innerHTML == "o") {  //! coulme
        get(filterElemnts);                                                                           
        getContainerStyle("91vh", "19.9vw", " 0.3vw")
    } if (allBtn[0].innerHTML == "x" && allBtn[3].innerHTML == "x" && allBtn[6].innerHTML == "x") { //! coulme
        get(filterElemnts);                                                                          
        getContainerStyle("91vh", "19.9vw", " 0.3vw")
    } if (allBtn[1].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[7].innerHTML == "o") { //! coulme                                 
        get(filterElemnts);                                                                           
        getContainerStyle("91vh", "50.4vw", "0.3vw")
    } if (allBtn[1].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[7].innerHTML == "x") { //! coulme                            
        get(filterElemnts);
        getContainerStyle("91vh", "50.4vw", " 0.3vw")
    } if (allBtn[2].innerHTML == "o" && allBtn[5].innerHTML == "o" && allBtn[8].innerHTML == "o") { //! coulme
        get(filterElemnts);                                                                              
        getContainerStyle("91vh", "80.9vw", " 0.3vw")
    } if (allBtn[2].innerHTML == "x" && allBtn[5].innerHTML == "x" && allBtn[8].innerHTML == "x") { //! coulme
        get(filterElemnts);
        getContainerStyle("91vh", "80.9vw", " 0.3vw")
    } if (allBtn[0].innerHTML == "o" && allBtn[1].innerHTML == "o" && allBtn[2].innerHTML == "o") { //! row
        get(filterElemnts);                                                                                       
        getContainerStyle("0.5vh"," 5vw","91vw","15.9vh;")
    } if (allBtn[0].innerHTML == "x" && allBtn[1].innerHTML == "x" && allBtn[2].innerHTML == "x") { //! row                                                   
        get(filterElemnts);
        getContainerStyle("0.5vh"," 5vw","91vw","15.9vh;")
    } if (allBtn[3].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[5].innerHTML == "o") { //! row                                                 
        get(filterElemnts);                                                                                      
        getContainerStyle("0.5vh"," 5vw","91vw","46vh;")
    } if (allBtn[3].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[5].innerHTML == "x") { //! row                                                 
        get(filterElemnts);
        getContainerStyle("0.5vh"," 5vw","91vw","46vh;")
    } if (allBtn[6].innerHTML == "o" && allBtn[7].innerHTML == "o" && allBtn[8].innerHTML == "o") { //! row                                              
        get(filterElemnts);                                                                                     
        getContainerStyle("0.5vh"," 5vw","91vw","76vh;")
    } if (allBtn[6].innerHTML == "x" && allBtn[7].innerHTML == "x" && allBtn[8].innerHTML == "x") { //! row   
        get(filterElemnts);
        getContainerStyle("0.5vh"," 5vw","91vw","76vh;")
    } if (allBtn[0].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[8].innerHTML == "o") { //! slantLine                                              
        get(filterElemnts);                                                                                       
        getContainerStyle("0.5vh","3vw","95vw","45.5vh","24deg")
    } if (allBtn[0].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[8].innerHTML == "x") { //! slantLine                                                  
        get(filterElemnts);
        getContainerStyle("0.5vh","3vw","95vw","45.5vh","24deg")
    } if (allBtn[2].innerHTML == "o" && allBtn[4].innerHTML == "o" && allBtn[6].innerHTML == "o") { //! slantLine                                                    
        get(filterElemnts);                                                                                       
        getContainerStyle("0.5vh","3vw","95vw","45.5vh","-24deg")
    } if (allBtn[2].innerHTML == "x" && allBtn[4].innerHTML == "x" && allBtn[6].innerHTML == "x") { //! slantLine                                                   
        get(filterElemnts);
        getContainerStyle("0.5vh","3vw","95vw","45.5vh","-24deg")
    }

}

