var inputName = document.getElementById("yourName");
var inputEmail = document.getElementById("yourEmail");
var inputTitle = document.getElementById("yourTitle");
var inputComment = document.getElementById("yourComment");

function validate() {
    check(inputName);
    check(inputEmail);
    check(inputTitle);
    check(inputComment);
}

function check(input) {
    if (!input.value) {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "none";
    }
}

var button = document.getElementById("button1");
button.addEventListener("click", validate);
