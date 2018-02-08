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

    /*alert(coupleStatus + "-" + countClick + "-" + flagCardOneStatus+"-"+flagCardTwoStatus);*/

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
    let cardCssClassName = cardObj.getAttribute("id");

    if (hasCssClass(cardObj,cardCssClassName) && statusOfCard === 1){
        removeCssClass(cardObj,cardCssClassName);
        countClick--;
        statusOfCard = 0;
        deleteCardInStore(cardObj);
    }else if(statusOfCard === 0){
        //Check if countClick = 2 now and player will click one more time
        //It's mean countClick will be 3 after this click
        //We must close 2 cards which opened before
        //Allow only 2 cards opened in the same time

        if (countClick === 2){deleteTwoCardsBefore();}
        addNewCardToStore(cardObj);
        addCssClass(cardObj,cardCssClassName);
        countClick++;
        statusOfCard = 1;
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
        countClick = 0;//reset countClick
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