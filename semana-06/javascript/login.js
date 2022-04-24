function verifyMail() {
    var email = document.getElementById('mail').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!validateEmail.test(email)) {
        document.getElementById('mail').style.border = '3px solid red';
        document.getElementById('pMail').classList.remove('errorEmail');
    } else {
        document.getElementById('email').style.border = '3px solid green';
    }
}

/*if (arroba !== -1 && punto !== -1) {
    console.log("paso")
    if (arroba > 0 && punto > arroba + 1 && punto < correo.length - 1) {
        document.getElementById("mail").style.border = "3px solid green";

        inputB = true;

    } else {

        document.getElementById("mail").style.border = "3px solid red";
        document.getElementById('pMail').classList.remove("errorEmail");
    }
} else {
    document.getElementById('pMail').classList.remove("errorEmail");
    document.getElementById("mail").style.border = "3px solid red";
}*/




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
    if (password.length - 1 > 8) {
        document.getElementById('password').style.border = "3px solid green";
    } else {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("pPassword").classList.remove("passwordError");
    }
    if (letras <= 0 || nume <= 0 || password.indexOf(" ") > -1) {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("pPassword").classList.remove("passwordError");
    } else {
        document.getElementById('password').style.border = "3px solid green";
        inputC = true;
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


function handleOnSubmit() {
    verifyMail();
    verifyPassword1();
}
window.onload = function() {
    document.getElementById("inscription").addEventListener('submit', function(event) {
        event.preventDefault()
    })
}