//DECLARE GLOBAL VARIABLES
let cardClickedStoreArray = [];
let countClick = 0;//Total of click (allow only from 0 to 2)
let countTriesLeft = 15;

//For card's status
let flagRow1Col1 = 0;
let flagRow1Col2 = 0;
let flagRow1Col3 = 0;
let flagRow1Col4 = 0;

let flagRow2Col1 = 0;
let flagRow2Col2 = 0;
let flagRow2Col3 = 0;
let flagRow2Col4 = 0;

let flagRow3Col1 = 0;
let flagRow3Col2 = 0;
let flagRow3Col3 = 0;
let flagRow3Col4 = 0;

let flagRow4Col1 = 0;
let flagRow4Col2 = 0;
let flagRow4Col3 = 0;
let flagRow4Col4 = 0;

//For couples
let flagCouple1 = 0;//Row1Col1 and Row1Col4
let flagCouple2 = 0;//Row1Col2 and Row2Col1
let flagCouple3 = 0;//Row1Col3 and Row2Col4
let flagCouple4 = 0;//Row2Col2 and Row4Col3
let flagCouple5 = 0;//Row2Col3 and Row4Col4
let flagCouple6 = 0;//Row3Col1 and Row3Col3
let flagCouple7 = 0;//Row3Col2 and Row4Col2
let flagCouple8 = 0;//Row3Col4 and Row4Col1

//DEFINITIONS FOR CARDS
//Definitions for row 1
let cardRow1Col1 = document.getElementById("cardRow1Col1");
let cardRow1Col2 = document.getElementById("cardRow1Col2");
let cardRow1Col3 = document.getElementById("cardRow1Col3");
let cardRow1Col4 = document.getElementById("cardRow1Col4");

//Definition for row 2
let cardRow2Col1 = document.getElementById("cardRow2Col1");
let cardRow2Col2 = document.getElementById("cardRow2Col2");
let cardRow2Col3 = document.getElementById("cardRow2Col3");
let cardRow2Col4 = document.getElementById("cardRow2Col4");

//Definitions for row 3
let cardRow3Col1 = document.getElementById("cardRow3Col1");
let cardRow3Col2 = document.getElementById("cardRow3Col2");
let cardRow3Col3 = document.getElementById("cardRow3Col3");
let cardRow3Col4 = document.getElementById("cardRow3Col4");

//Definitions for row 4
let cardRow4Col1 = document.getElementById("cardRow4Col1");
let cardRow4Col2 = document.getElementById("cardRow4Col2");
let cardRow4Col3 = document.getElementById("cardRow4Col3");
let cardRow4Col4 = document.getElementById("cardRow4Col4");