//REUSABLE FUNCTIONS
function addCssClass(elementID,cssClassName) {
    return elementID.classList.add(cssClassName);
}
function removeCssClass(elementID,cssClassName){
    return elementID.classList.remove(cssClassName);
}
function hasCssClass(elementID,cssClassName){
    return elementID.classList.contains(cssClassName);
}

//PROGRAM'S FUNCTIONS
function checkStatusAndLockCouple(flagCardOneStatus,flagCardTwoStatus,flagCoupleStatus,cardOneObj,cardTwoObj) {
    let coupleStatus = parseInt(flagCoupleStatus);
    let cardOneStatus = parseInt(flagCardOneStatus);
    let cardTwoStatus = parseInt(flagCardTwoStatus);

    if (checkCoupleFound(cardOneStatus,cardTwoStatus) && countClick === 2){
        coupleStatus = 1;
        lockCouple(cardOneObj,cardTwoObj);
        cardClickedStoreArray = [];//reset store array
    }
    return coupleStatus;

    //Functions are within
    function checkCoupleFound(cardOneStatus, cardTwoStatus) {return (cardOneStatus === 1 && cardTwoStatus === 1);}
    function lockCouple(cardOneObj,cardTwoObj){
        addCssClass(cardOneObj,"cardMouseOverForbidden");
        addCssClass(cardTwoObj,"cardMouseOverForbidden");
    }
}
function cardActiveInactive(cardObj, flagStatusOfCard){
    let statusOfCard = parseInt(flagStatusOfCard);

    if (countClick < 2){
        let cardCssClassName = cardObj.getAttribute("id");
        if (hasCssClass(cardObj,cardCssClassName) && statusOfCard === 1){
            deleteCardInStore(cardObj);
            removeCssClass(cardObj,cardCssClassName);
            countClick--;
            statusOfCard = 0;
        }else if(statusOfCard === 0){
            addNewCardToStore(cardObj);
            addCssClass(cardObj,cardCssClassName);
            countClick++;
            statusOfCard = 1;
        }

        if (countClick === 2){
            setTimeout(function () {
                deleteTwoCardsBefore();
                countClick = 0;//reset countClick
            },500);
        }
    }
    return statusOfCard;

    function addNewCardToStore(cardObj) {
        let cardID = cardObj.getAttribute("id");
        cardClickedStoreArray.push(cardID);
    }
    function deleteCardInStore(cardObj) {
        let cardID = cardObj.getAttribute("id");
        if (cardClickedStoreArray.indexOf(cardID) !== -1){
            cardClickedStoreArray.splice(cardClickedStoreArray.indexOf(cardID),1);
        }
    }
    function deleteTwoCardsBefore() {
        for (let i=0;i<cardClickedStoreArray.length;i++){
            document.getElementById(cardClickedStoreArray[i]).removeAttribute("class");//reset to default style
        }
        cardClickedStoreArray = [];//reset store array
        resetAllFlagCards();//reset all flagCards
    }
}
function resetAllFlagCards() {
    flagRow1Col1 = 0;
    flagRow1Col2 = 0;
    flagRow1Col3 = 0;
    flagRow1Col4 = 0;

    flagRow2Col1 = 0;
    flagRow2Col2 = 0;
    flagRow2Col3 = 0;
    flagRow2Col4 = 0;

    flagRow3Col1 = 0;
    flagRow3Col2 = 0;
    flagRow3Col3 = 0;
    flagRow3Col4 = 0;

    flagRow4Col1 = 0;
    flagRow4Col2 = 0;
    flagRow4Col3 = 0;
    flagRow4Col4 = 0;
}
function checkCountTriesLeft(flagCouple) {
    let coupleStatus = parseInt(flagCouple);

    if (coupleStatus === 0 && countClick === 2){
        if (countTriesLeft > 0){
            countTriesLeft--;
            document.getElementById("displayUserTriesLeft").innerHTML = countTriesLeft;
        }else{
            turnOnLockState();
            document.getElementById("displayLoseMessage").innerHTML = "You loose! Try again!"
        }
    }
}
function turnOnLockState(){
    flagCouple1 = 1;
    flagCouple2 = 1;
    flagCouple3 = 1;
    flagCouple4 = 1;
    flagCouple5 = 1;
    flagCouple6 = 1;
    flagCouple7 = 1;
    flagCouple8 = 1;

}