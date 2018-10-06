
// stworzenie pól

function createField(color, colNum){                    // color - czyta class white or black
    var field = document.createElement("div");
    field.classList.add("field", color);              // dodanie rodzaju class white or black

    field.setAttribute("col", colNum);               // numeracja kolumny

    var fieldInside = document.createElement("div");
    fieldInside.classList.add("field-inside");       // dodanie class

    field.appendChild(fieldInside);                  // wklejenie field-inside do field

    return field;
}


// stworzenie wiersza z 8 polami

function createRow(rowNum){
    var row = document.createElement("div");
    row.classList.add("row");

    row.setAttribute("row", rowNum);                              // numeracja wiersza

    for(var i = 1; i < 9; i++){
        var color = (i +(rowNum % 2)) % 2 ? "white" : "black";    // color dla parzystych i nieparzystych + naprzemienne kolory (chess)
        var field = createField(color, i);                           // stworzenie 8 pól z colorem i numeracja ?
        row.appendChild(field);                                   // stworzenie wiersza z 8 polami
    }
    return row;
}


// pole gry - 8 wierszy

function drawChessBoard(){
    var board = document.getElementById("board");

    for(var i = 8; i > 0; i--){
        var row = createRow(i);             // stworzenie 8 wierszy
        board.appendChild(row);            // board zawiera 8 wierszy z 8 polami
    }
}


//

function createFigure(animalName){
    var figure = document.createElement("div");
    figure.classList.add("figure", animalName);
    return figure;
}






// znajdywanie pola

function findField(col, row){
    var row = document.querySelector(`[row="${row}"]`);        // szukamy wiersza w dokumencie
    var field = row.querySelector(`[col="${col}"]`);           // szukamy w odpowiednim wierszu kolumny

// można zrobić to jedną komendą
// var field = document.querySelector(`[row="${row}"] [col="${col}"]`);

    return field;
}







// tworzy i ustawia figure na planszy

function placeFigure(figureName, col, row){
    var field = findField(col, row);
    var figure = createFigure(figureName);
    field.firstChild.appendChild(figure);
}