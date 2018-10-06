

function setEventListeners(){
    var figures = document.querySelectorAll(".figure");        // zwraca całą tablice elementów
    
    for(var item of figures){
        item.addEventListener("click", showPossibleMoves);
    }

    document.addEventListener("click", function(event){
        if(event.target.closest(".possible_move")){
            moveFigure(event.target.closest(".possible_move"));
        } else{
            hideAllPossibleMoves();
        }
    });
}


function moveFigure(moveToField){
    var fromCol = moveToField.dataset.fromCol;
    var fromRow = moveToField.dataset.fromRow;
    var figure = findField(fromCol, fromRow).querySelector(".figure");

    moveToField.firstChild.appendChild(figure);
    hideAllPossibleMoves();
}


function hideAllPossibleMoves(){                              // usuwamy klasy, aby po click znikły zielone pola
    var items = document.querySelectorAll(".possible_move");
    for(var item of items){
        item.classList.remove("possible_move");
    }
}



function showPossibleMoves(event){                           // event przekazuje, który element jest zaznaczony 
    event.stopPropagation();
    hideAllPossibleMoves();

    var clickedFigure = event.target;
    var col = +clickedFigure.closest(".field").getAttribute("col");
    var row = +clickedFigure.closest(".row").getAttribute("row");

    var newrow = clickedFigure.classList.contains("monster") ? row-1 : row+1;
    var col_left = col - 1;
    var col_right = col + 1;

    if(newrow < 1 || newrow > 8){
        return;
    }

    if(col_left > 0 && col_left < 9){                                    // pokazuje pobliske pola możliwe do wykonania ruchu
        if(isFieldEmpty(col_left, newrow)){
            var field = findField(col_left, newrow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }
    }

    if(col_right > 0 && col_right < 9){
        if(isFieldEmpty(col_right, newrow)){
            var field = findField(col_right, newrow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }
    }
}

function isFieldEmpty(col, row){                                 // jakie pola są puste
    return !findField(col, row).querySelector(".figure");           // true zamienione na false "!"
}