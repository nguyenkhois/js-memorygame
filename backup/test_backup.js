let myCell = document.getElementById("myCell");

myCell.addEventListener("click",myFunction);

function myFunction(){
    myCell.classList.add("cellActive");
    alert("CLICKED");

    removeHandler();
    alert("REMOVED");
}

function removeHandler() {
    myCell.removeEventListener("click",myFunction);
}