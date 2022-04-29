var inputA;
var inputB

function verifyMail() {
    var email = document.getElementById('mail').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!validateEmail.test(email)) {
        document.getElementById('mail').style.border = '3px solid red';
        document.getElementById('pMail').classList.remove('errorEmail');
        inputA = false;
    } else {
        console.log("entro")
        document.getElementById('mail').style.border = '3px solid green';
        inputA = true
    }
}


function verifyPassword1() {
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const password = document.getElementById('password').value;
    var letras = 0;
    var nume = 0;
    for (let i = 0; i < password.length; i++) {
        if (abc.includes(password[i].toLocaleLowerCase())) {
            letras++;
        } else {
            Number.isInteger(password[i]);
            nume++;
        }
    }
    // h,o,l,a,1,2,3,4
    if (password.length > 7) {
        document.getElementById('password').style.border = "3px solid green";
        inputB = true;
    } else {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("pPassword").classList.remove("passwordError");
        inputB = false;
    }
    if (letras <= 0 || nume <= 0 || password.indexOf(" ") > -1) {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("pPassword").classList.remove("passwordError");
        inputB = false;
    } else {
        document.getElementById('password').style.border = "3px solid green";
        inputB = true;

    }
}
//focus 
function correccionMail() {
    document.getElementById("mail").style.border = "5px solid lightgray";
    document.getElementById('pMail').classList.add('errorEmail');
}

function correccionPass() {
    document.getElementById("password").style.border = "5px solid lightgray";
    document.getElementById('pPassword').classList.add("passwordError");
}


function confirmSubmit() {
    var emailPrint = document.getElementById("mail").value;
    var passwordPrint = document.getElementById("password").value;
    alert(
        "Your email is: " + emailPrint +
        "\nYour password is: " + passwordPrint);
}

function confirm() {
    if (inputA == true && inputB == true) {
        confirmSubmit()
    } else {
        alert('Please, enter valid values')
    }
}


// HandleOnSubmit


function handleOnSubmit() {
    confirm();
}
window.onload = function() {
    document.getElementById("inscription").addEventListener('submit', function(event) {
        event.preventDefault()
    })
}