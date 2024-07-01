
function openNav() {
    document.getElementById("BoardMenu").style.top = "0";
    document.getElementById("openBoardMenu").style.top = "40vh";
    //document.getElementById("openBoardMenu").setAttribute("z-index", "5");
    //document.getElementById("BoardMenu").setAttribute("z-index", "5");

}
function closeNav() {
    document.getElementById("BoardMenu").style.top = "-40vh";
    //document.getElementById("openBoardMenu").setAttribute("z-index", "1");
    //document.getElementById("BoardMenu").setAttribute("z-index", "1");
    document.getElementById("openBoardMenu").style.top = "0vh";
}

