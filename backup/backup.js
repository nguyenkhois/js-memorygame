//Declare functions
function addCssClass(elementID,cssClassName) {
    return elementID.classList.add(cssClassName);
}
function removeCssClass(elementID,cssClassName){
    return elementID.classList.remove(cssClassName);
}
function hasCssClass(elementID,cssClassName){
    if (elementID.classList.contains(cssClassName)){
        return true;
    }else{
        return false;
    }
}


function checkCoupleState(cardOneState, cardTwoState) {
    if (cardOneState === cardTwoState){return true;}
    else{return false;}
}
function lockAnCouple(cardOne,cardTwo, flasgCouple){
    addCssClass(cardOne,"cardMouseOverForbidden");
    addCssClass(cardTwo,"cardMouseOverForbidden");

    //insert element's ID into store
    cardsArray.push(cardOne.getAttribute("id"));
    cardsArray.push(cardTwo.getAttribute("id"));

    return flasgCouple = 1;
}

function resetAllCss(findCss, defaultCss) {
    let allCards = document.querySelectorAll("."+findCss);
    let listOfCardsStored = cardsArray.join();

    /*for (let i = 0; i < allCards.length; i++){
        let findCardID = "";
        if (listOfCardsStored.length > 0){
            findCardID = listOfCardsStored.search(allCards[i].getAttribute("id"));
        }

        //Reset CSS to default if cardID not found in store list
        if (findCardID === -1){
            allCards[i].removeAttribute("class"); //remove "class" attribute for all elements
            allCards[i].classList.add(defaultCss); //add again default CSS class(es)
        }
    }*/

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].removeAttribute("class"); //remove "class" attribute for all elements
        allCards[i].classList.add(defaultCss); //add again default CSS class(es)
    }
}


//MAIN PROGRAM
//Declare global variables
var pointToWin = 2; //Total points which player must have
var pointToHave = 0; //Total points which player has got while play
var cardsActive = 0; //Total of click (allow only from 0 to 2)
var cardsArray = [];//save cards which are couple to this store

//Using for check card is active or not
var flagRow1Col1 = 0;
var flagRow1Col2 = 0;
var flagRow1Col3 = 0;
var flagRow1Col4 = 0;

var flagRow2Col1 = 0;
var flagRow2Col2 = 0;
var flagRow2Col3 = 0;
var flagRow2Col4 = 0;

//Using for check an couple is finds or not
var flagCouple1 = 0; //Row1Col1 and Row1Col4
var flagCouple2 = 0; //Row1Col2 and Row2Col1
var flagCouple3 = 0;
var flagCouple4 = 0;

//Definitions for Row 1
let cardRow1Col1 = document.getElementById("row1col1");
let cardRow1Col2 = document.getElementById("row1col2");
let cardRow1Col3 = document.getElementById("row1col3");
let cardRow1Col4 = document.getElementById("row1col4");

//Definition for row 2
let cardRow2Col1 = document.getElementById("row2col1");
let cardRow2Col2 = document.getElementById("row2col2");
let cardRow2Col3 = document.getElementById("row2col3");
let cardRow2Col4 = document.getElementById("row2col4");

//Actions for row 1
cardRow1Col1.onclick = function(){
    if (cardsActive > 2) {
        //do stuff
        //reset all card without these active couples
        resetAllCss("cardMouseOver", "cardMouseOver");
        //reset cardsActive = 0
        cardsActive = 0;
    } else {
        if (flagCouple1 === 0) {
            if (hasCssClass(cardRow1Col1, "cardRow1Col1Style")) {
                cardsActive--;
                flagRow1Col1 = 0; //Col1Row1 is inactive
                removeCssClass(cardRow1Col1, "cardRow1Col1Style");
            } else {
                cardsActive++;
                flagRow1Col1 = 1; //Col1Row1 clicked and active
                addCssClass(cardRow1Col1, "cardRow1Col1Style");

                //Check couple

                if (cardsActive === 2){
                    if (checkCoupleState(flagRow1Col1, flagRow1Col4)) {
                        pointToHave++;
                        //need action lock couple
                        flagCouple1 = lockAnCouple(cardRow1Col1, cardRow1Col4, flagCouple1);
                        alert("cardActive in: " + cardsActive);

                        cardsActive = 0;
                    }
                    resetAllCss("cardMouseOver", "cardMouseOver");
                }
            }
        }
    }
};
cardRow1Col2.onclick = function () {
    if (cardsActive > 2){
        //do stuff
        //reset all card without these active couples
        resetAllCss("cardMouseOver", "cardMouseOver");
        //reset cardsActive = 0
        cardsActive = 0;
    }else {
        if (flagCouple2 === 0) {
            if (hasCssClass(cardRow1Col2, "cardRow1Col2Style")) {
                cardsActive--;
                flagRow1Col2 = 0;
                removeCssClass(cardRow1Col2, "cardRow1Col2Style")
            } else {
                cardsActive++;
                flagRow1Col2 = 1;
                addCssClass(cardRow1Col2, "cardRow1Col2Style");

                if (checkCoupleState(flagRow1Col2, flagRow2Col1)) {
                    pointToHave++;

                    //need action lock couple
                    flagCouple2 = lockAnCouple(cardRow1Col2, cardRow2Col1, flagCouple2);
                }
            }
        }
    }
    alert("cardActive: " + cardsActive);
};
cardRow1Col3.addEventListener("click",function () {
    if (hasCssClass(cardRow1Col3,"cardRow1Col3Style")){
        removeCssClass(cardRow1Col3,"cardRow1Col3Style");
    } else{
        addCssClass(cardRow1Col3,"cardRow1Col3Style");
    }
});
cardRow1Col4.onclick = function () {
    if (cardsActive > 2){
        //do stuff
        //reset all card without these active couples
        resetAllCss("cardMouseOver","cardMouseOver");
        //reset cardsActive = 0
        cardsActive = 0;
    }else {
        if (flagCouple1 === 0) {
            if (hasCssClass(cardRow1Col4, "cardRow1Col4Style")) {
                cardsActive--;
                flagRow1Col4 = 0;
                removeCssClass(cardRow1Col4, "cardRow1Col4Style");
            } else {
                cardsActive++;
                flagRow1Col4 = 1;
                addCssClass(cardRow1Col4, "cardRow1Col4Style");

                //Check couple
                if (checkCoupleState(flagRow1Col1, flagRow1Col4)) {
                    pointToHave++;

                    //need action lock couple
                    flagCouple1 = lockAnCouple(cardRow1Col1, cardRow1Col4, flagCouple1);
                } else {
                    //false
                }
            }
        }
    }
    alert("cardActive: " + cardsActive);
};

//Action for row 2
cardRow2Col1.addEventListener("click",function () {
    if (hasCssClass(cardRow2Col1,"cardRow2Col1Style")){
        removeCssClass(cardRow2Col1,"cardRow2Col1Style");
    } else{
        addCssClass(cardRow2Col1,"cardRow2Col1Style");
    }
});

