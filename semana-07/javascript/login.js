var inputA = false;
var inputB = false;

function verifyMail() {
    var email = document.getElementById('mail').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!validateEmail.test(email)) {
        document.getElementById('mail').style.border = '3px solid red';
        document.getElementById('pMail').classList.remove('errorEmail');
        inputA = false;
    } else {
        console.log('entro')
        document.getElementById('mail').style.border = '3px solid green';
        inputA = true
    }
}

function verifyPassword1() {
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
        document.getElementById('password').style.border = '3px solid green';
        inputB = true;
    } else {
        document.getElementById('password').style.border = '3px solid red';
        document.getElementById('pPassword').classList.remove('passwordError');
        inputB = false;
    }
    if (letras <= 0 || nume <= 0 || password.indexOf(' ') > -1) {
        document.getElementById('password').style.border = '3px solid red';
        document.getElementById('pPassword').classList.remove('passwordError');
        inputB = false;
    } else {
        document.getElementById('password').style.border = '3px solid green';
        inputB = true;

    }
}

function correccionMail() {
    document.getElementById('mail').style.border = '5px solid lightgray';
    document.getElementById('pMail').classList.add('errorEmail');
}

function correccionPass() {
    document.getElementById('password').style.border = '5px solid lightgray';
    document.getElementById('pPassword').classList.add('passwordError');
}


function confirmSubmit() {
    var emailPrint = document.getElementById('mail').value;
    var passwordPrint = document.getElementById('password').value;
    var modal = document.getElementById('modal').classList.remove('modal-content')
    document.getElementById('mailModal').innerText = 'Your e-mail is: ' + emailPrint
    document.getElementById('passwordModal').innerText = 'Your password is: ' + passwordPrint
}

function confirm() {
    console.log('entra confirm')
    if (inputA == true && inputB == true) {
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        var listKey = ['email', 'password'];
        var listValue = [document.getElementById('mail').value, document.getElementById('password').value]
        loginFetch(url, listKey, listValue)
    } else {
        alert('Please, enter valid values')
    }
}

var listKey = []
var listValue = []

function joinParams(listKey, listValue) {
    var myArr = [];
    for (let i = 0; i < listKey.length; i++) {
        myArr.push(listKey[i].concat('=', listValue[i]))
    }
    return myArr.join('&')
}

function loginFetch(url, listKey, listValue) {
    var queryParams = joinParams(listKey, listValue);
    var fetchUrl = url.concat('?', queryParams)
    fetch(fetchUrl)
        .then(function(response) {
            response.json()
                .then(function(result) {
                    console.log('result', result);
                    alert(result.msg);
                    confirmSubmit();
                });
        })
        .catch(function(result) {
            alert('error' + result);
        });
};

function handleOnSubmit() {
    confirm();
}
window.onload = function() {
    document.getElementById('inscription').addEventListener('submit', function(event) {
        event.preventDefault()
    })
}