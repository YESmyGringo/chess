
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //Draw board
     drawChessBoard();

    //Draw pawns
     placeFigure("monster", 4, 8);
     placeFigure("cookie", 1, 1);
     placeFigure("cookie", 3, 1);
     placeFigure("cookie", 5, 1);
     placeFigure("cookie", 7, 1);

    //Add movement
     setEventListeners();

    //Reset
    setResetButton();

    //One party moves at time

    //Winning condition checking

});