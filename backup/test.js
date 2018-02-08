let myCell = document.getElementById("myCell");

myCell.addEventListener("click",(function (myCell) {
        return function () {
            myFunction(myCell);
        }
    })(myCell));


function myFunction(elementID){
    elementID.classList.add("cellActive");
    alert("CLICKED");

    removeHandler(elementID);
    alert("REMOVED");
}

function removeHandler(elementID) {
    myCell.removeEventListener("click",(function (myCell) {
        return function () {
            myFunction(myCell);
        }
    })(myCell));
}