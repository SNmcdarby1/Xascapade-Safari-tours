// checkbox 
function checkButton() {
    if (document.getElementById('tour1').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("selftour").value +
            " radio button is checked";
    } else if (document.getElementById('tour2').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("privatetour").value +
            " radio button is checked";
    } else if (document.getElementById('tour3').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("grouptour").value +
            " radio button is checked";
    } else if (document.getElementById('tour4').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("grouptour").value +
            " radio button is checked";
    } else {
        document.getElementById("error").innerHTML = "You have not selected any season";
    }
}