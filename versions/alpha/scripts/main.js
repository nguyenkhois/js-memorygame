//MAIN PROGRAM
//Row 1
cardRow1Col1.addEventListener("click",function () {
    if (flagCouple1 === 0) {
        flagRow1Col1 = cardActiveInactive(cardRow1Col1, flagRow1Col1);
        flagCouple1 = checkStatusAndLockCouple(flagRow1Col1, flagRow1Col4, flagCouple1, cardRow1Col1, cardRow1Col4);
    }
});
cardRow1Col2.addEventListener("click",function () {
    if (flagCouple2 === 0){
        flagRow1Col2 = cardActiveInactive(cardRow1Col2,flagRow1Col2);
        flagCouple2 = checkStatusAndLockCouple(flagRow1Col2,flagRow2Col1,flagCouple2,cardRow1Col2,cardRow2Col1);
    }
});
cardRow1Col3.addEventListener("click",function () {
    if (flagCouple3 === 0){
        flagRow1Col3 = cardActiveInactive(cardRow1Col3,flagRow1Col3);
        flagCouple3 = checkStatusAndLockCouple(flagRow1Col3,flagRow2Col4,flagCouple3,cardRow1Col3,cardRow2Col4);
    }
});
cardRow1Col4.addEventListener("click",function () {
    if (flagCouple1 === 0){
        flagRow1Col4 = cardActiveInactive(cardRow1Col4, flagRow1Col4);
        flagCouple1 = checkStatusAndLockCouple(flagRow1Col4,flagRow1Col1,flagCouple1,cardRow1Col4,cardRow1Col1);
    }
});

//Row 2
cardRow2Col1.addEventListener("click",function () {
    if (flagCouple2 === 0){
        flagRow2Col1 = cardActiveInactive(cardRow2Col1,flagRow2Col1);
        flagCouple2 = checkStatusAndLockCouple(flagRow2Col1,flagRow1Col2,flagCouple2,cardRow2Col1,cardRow1Col2);
    }
});
cardRow2Col2.addEventListener("click",function () {
    if (flagCouple4 === 0){
        flagRow2Col2 = cardActiveInactive(cardRow2Col2,flagRow2Col2);
        flagCouple4 = checkStatusAndLockCouple(flagRow2Col2,flagRow4Col3,flagCouple4,cardRow2Col2,cardRow4Col3);
    }
});
cardRow2Col3.addEventListener("click",function () {
    if (flagRow2Col3 === 0){
        flagRow2Col3 = cardActiveInactive(cardRow2Col3,flagRow2Col3);
        flagCouple5 = checkStatusAndLockCouple(flagRow2Col3,flagRow4Col4,flagCouple5,cardRow2Col3,cardRow4Col4);
    }
});
cardRow2Col4.addEventListener("click",function () {
    if (flagCouple3 === 0){
        flagRow2Col4 = cardActiveInactive(cardRow2Col4,flagRow2Col4);
        flagCouple3 = checkStatusAndLockCouple(flagRow2Col4,flagRow1Col3,flagCouple3,cardRow2Col4,cardRow1Col3);
    }
});

//Row 3
cardRow3Col1.addEventListener("click",function () {
    if (flagCouple6 === 0){
        flagRow3Col1 = cardActiveInactive(cardRow3Col1,flagRow3Col1);
        flagCouple6 = checkStatusAndLockCouple(flagRow3Col1,flagRow3Col3,flagCouple6,cardRow3Col1,cardRow3Col3);
    }
});
cardRow3Col2.addEventListener("click",function () {
    if (flagCouple7 ===  0){
        flagRow3Col2 = cardActiveInactive(cardRow3Col2,flagRow3Col2);
        flagCouple7 = checkStatusAndLockCouple(flagRow3Col2,flagRow4Col2,flagCouple7,cardRow3Col2,cardRow4Col2);
    }
});
cardRow3Col3.addEventListener("click",function () {
    if (flagCouple6 === 0){
        flagRow3Col3 = cardActiveInactive(cardRow3Col3,flagRow3Col3);
        flagCouple6 = checkStatusAndLockCouple(flagRow3Col3,flagRow3Col1,flagCouple6,cardRow3Col3,cardRow3Col1);
    }
});
cardRow3Col4.addEventListener("click",function () {
    if (flagCouple8 === 0){
        flagRow3Col4 = cardActiveInactive(cardRow3Col4,flagRow3Col4);
        flagCouple8 = checkStatusAndLockCouple(flagRow3Col4,flagRow4Col1,flagCouple8,cardRow3Col4,cardRow4Col1);
    }
});

//Row 4
cardRow4Col1.addEventListener("click",function () {
    if (flagCouple8 === 0){
        flagRow4Col1 = cardActiveInactive(cardRow4Col1,flagRow4Col1);
        flagCouple8 = checkStatusAndLockCouple(flagRow4Col1,flagRow3Col4,flagCouple8,cardRow4Col1,cardRow3Col4);
    }
});
cardRow4Col2.addEventListener("click",function () {
    if (flagCouple7 === 0){
        flagRow4Col2 = cardActiveInactive(cardRow4Col2,flagRow4Col2);
        flagCouple7 = checkStatusAndLockCouple(flagRow4Col2,flagRow3Col2,flagCouple7,cardRow4Col2,cardRow3Col2);
    }
});
cardRow4Col3.addEventListener("click",function () {
    if (flagCouple4 === 0){
        flagRow4Col3 = cardActiveInactive(cardRow4Col3,flagRow4Col3);
        flagCouple4 = checkStatusAndLockCouple(flagRow4Col3,flagRow2Col2,flagCouple4,cardRow4Col3,cardRow2Col2);
    }
});
cardRow4Col4.addEventListener("click",function () {
    if (flagCouple5 === 0){
        flagRow4Col4 = cardActiveInactive(cardRow4Col4,flagRow4Col4);
        flagCouple5 = checkStatusAndLockCouple(flagRow4Col4,flagRow2Col3,flagCouple5,cardRow4Col4,cardRow2Col3);
    }
});