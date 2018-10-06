

function setResetButton(){
    var reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
    if(window.confirm("Are you sure, you want to reset?")){
        window.location.reload();
    }
    });
}