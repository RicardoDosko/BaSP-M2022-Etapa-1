var inputA;
var inputB;
var inputC;
var inputD;
var inputE;
var inputF;
var inputG;
var inputH;
var inputI;
var inputJ;

function verifyName() {
    const abc = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const name = document.getElementById('name').value;
    //aca verificamos que sea un nombre
    for (let i = 0; i < name.length; i++) {
        if (!abc.includes(name[i].toLowerCase())) {
            document.getElementById('name').style.border = '3px solid red';
            document.getElementById('pName').classList.remove('errorName');
            inputA = false
        }
    }
    if (name.length < 3) {
        document.getElementById('name').style.border = '3px solid red';
        document.getElementById('pName').classList.remove('errorName');
        inputA = false
    } else {
        document.getElementById('name').style.border = '3px solid green';
        inputA = true;
    }
}

function verifyLastName() {
    const abc = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lastName = document.getElementById('lastName').value;
    for (let i = 0; i < lastName.length; i++) {
        if (!abc.includes(lastName[i].toLowerCase())) {
            document.getElementById('lastName').style.border = '3px solid red';
            document.getElementById('p-last-Name').classList.remove('error-last-Name');
            inputE = false;
            return ('escribe respuesta correcta');
        }
    }
    if (lastName.length < 3) {
        document.getElementById('lastName').style.border = '3px solid red';
        document.getElementById('p-last-Name').classList.remove('error-last-Name');
        inputE = false;
    } else {
        document.getElementById('lastName').style.border = '3px solid green';
        inputE = true;
    }
}

function verifyMail() {
    var correo = document.getElementById('mail').value;
    const arroba = correo.indexOf('@');
    const punto = correo.lastIndexOf('.');
    if (arroba !== -1 && punto !== -1) {
        if (arroba > 0 && punto > arroba + 1 && punto < correo.length - 1) {
            document.getElementById('mail').style.border = '3px solid green';
            inputB = true;
        } else {
            document.getElementById('mail').style.border = '3px solid red';
            document.getElementById('pMail').classList.remove('errorEmail');
            inputB = false;
        }
    } else {
        document.getElementById('pMail').classList.remove('errorEmail');
        document.getElementById('mail').style.border = '3px solid red';
        inputB = false;
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
    if (password.length >= 8) {
        document.getElementById('password').style.border = '3px solid green';
        inputC = true;
    } else {
        document.getElementById('password').style.border = '3px solid red';
        document.getElementById('pPassword').classList.remove('passwordError');
        inputC = false;
    }
    if (letras <= 0 || nume <= 0 || password.indexOf(' ') > -1) {
        document.getElementById('password').style.border = '3px solid red';
        document.getElementById('pPassword').classList.remove('passwordError');
        inputC = false;
    } else {
        document.getElementById('password').style.border = '3px solid green';
        inputC = true;
    }
}

function verifyPassword2() {
    const p1 = document.getElementById('password').value;
    const p2 = document.getElementById('password2').value;
    if (p1 === p2) {
        document.getElementById('password2').style.border = '3px solid green';
        inputD = true;
    } else {
        document.getElementById('pPassword2').classList.remove('password2Error');
        document.getElementById('password2').style.border = '3px solid red';
        inputD = false;
    }
}

function checkDOB() {
    var dob = document.getElementById('dateOfBirth').value
    console.log('dob', typeof dob)
    var dateDOB = new Date(dob).getTime();

    var diff = new Date().getTime() - dateDOB;

    age = Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.25));
    if (age >= 18) {
        inputK = true
        alert('you are an adult')
        document.getElementById('dateOfBirth').style.border = '3px solid green'
    } else {
        inputK = false
        alert('you are underage')
        document.getElementById('dateOfBirth').style.border = '3px solid red'
        document.getElementById('pAge').classList.remove('errorAge')
    }
}

function phoneNumber() {
    var phone = document.getElementById('phone').value;
    if (phone.length < 7) {
        document.getElementById('phone').style.border = '3px solid red';
        document.getElementById('pPhone').classList.remove('errorPhone');
        inputF = false;
    } else {
        document.getElementById('phone').style.border = '3px solid green';
        inputF = true;
    }
}

function verifyAddress() {
    var address = document.getElementById('address').value
    if (address.indexOf(' ') > -1 && address.indexOf(' ') < address.length - 2) {
        if (address.length > 5) {
            document.getElementById('address').style.border = '3px solid green';
            inputG = true;

        } else {
            document.getElementById('address').style.border = '3px solid red';
            document.getElementById('pAddress').classList.remove('errorAddress');
            inputG = false;
        }

    } else {
        document.getElementById('address').style.border = '3px solid red';
        document.getElementById('pAddress').classList.remove('errorAddress');
        inputG = false;
    }
}

function fromcity() {
    var city = document.getElementById('city').value;
    if (city.length < 3) {
        document.getElementById('city').style.border = '3px solid red';
        document.getElementById('cityText').classList.remove('errorCity');
        inputH = false;
    } else {
        document.getElementById('city').style.border = '3px solid green';
        inputH = true;
    }
}

function code() {
    var postalCode = document.getElementById('postalCode').value
    if (postalCode.length < 3) {
        document.getElementById('postalCode').style.border = '3px solid red';
        document.getElementById('postalText').classList.remove('errorCode');
        inputI = false
    } else {
        document.getElementById('postalCode').style.border = '3px solid green';
        inputI = true
    }
}

function dni() {
    var nid = document.getElementById('dni').value
    if (nid.length > 6) {
        if (nid.length <= 8) {
            document.getElementById('dni').style.border = '3px solid green';
            inputJ = true;
        } else {
            document.getElementById('dni').style.border = '3px solid red';
            document.getElementById('dniText').classList.remove('errorDni')
            inputJ = false;
        }
    } else {
        document.getElementById('dni').style.border = '3px solid red';
        document.getElementById('dniText').classList.remove('errorDni')
        inputJ = false;
    }
}

function blurDni() {
    dni()
}

function correccionName() {
    // document.querySelector('.errorName').classList.add('errorName');
    document.getElementById('pName').classList.add('errorName');
    document.getElementById('name').style.border = '5px solid lightgray';
}

function correctionLastName() {
    document.getElementById('lastName').style.border = '5px solid lightgray';
    document.getElementById('p-last-Name').classList.add('error-last-Name');
}

function correccionMail() {
    document.getElementById('mail').style.border = '5px solid lightgray';
    document.getElementById('pMail').classList.add('errorEmail');
}

function correccionPass() {
    document.getElementById('password').style.border = '5px solid lightgray';
    document.getElementById('pPassword').classList.add('passwordError');
}

function correccionPass2() {
    document.getElementById('password2').style.border = '5px solid lightgray';
    document.getElementById('pPassword2').classList.add('password2Error');
}

function correccionAge() {
    document.getElementById('age').style.border = '5px solid lightgray';
    document.getElementById('pAge').classList.add('errorAge');
}

function correccionPhone() {
    document.getElementById('phone').style.border = '5px solid Lightgray';
    document.getElementById('pPhone').classList.add('errorPhone');
}

function correccionAddress() {
    document.getElementById('address').style.border = '5px solid lightgray';
    document.getElementById('pAddress').classList.add('errorAddress');
}

function correccionCity() {
    document.getElementById('city').style.border = '5px solid lightgray';
    document.getElementById('cityText').classList.add('errorCity')
}

function correccionCode() {
    document.getElementById('postalCode').style.border = '5px solid lightgray';
    document.getElementById('postalText').classList.add('errorCode')
}

function correccionDni() {
    document.getElementById('dni').style.border = '5px solid lightgray';
    document.getElementById('dniText').classList.add('errorDni')
}

function confirmSubmit() {
    var firstNamePrint = document.getElementById('name').value;
    var lastNamePrint = document.getElementById('lastName').value;
    var iDNumberPrint = document.getElementById('dni').value;
    var phonePrint = document.getElementById('phone').value;
    var addressPrint = document.getElementById('address').value;
    var cityPrint = document.getElementById('city').value;
    var zipPrint = document.getElementById('postalCode').value;
    var emailPrint = document.getElementById('mail').value;
    var passwordPrint = document.getElementById('password').value;
    var confirmPasswordPrint = document.getElementById('password2').value;
    alert(
        'Your first name is: ' + firstNamePrint +
        '\nYour last name is: ' + lastNamePrint +
        '\nYour ID Number is: ' + iDNumberPrint +
        '\nYour phone number is: ' + phonePrint +
        '\nYour address is: ' + addressPrint +
        '\nYour city is: ' + cityPrint +
        '\nYour zip code is: ' + zipPrint +
        '\nYour email is: ' + emailPrint +
        '\nYour password is: ' + passwordPrint +
        '\nYour confirm password is: ' + confirmPasswordPrint +
        '\nYour age is: ' + age
    )
    var modal = document.getElementById('modal').classList.remove('modal-content')
    document.getElementById('firstNameModal').innerText = 'Your first name is: ' + firstNamePrint
    document.getElementById('lastNameModal').innerText = 'Your last name is: ' + lastNamePrint
    document.getElementById('idNumberModal').innerText = 'Your ID Number is: ' + iDNumberPrint
    document.getElementById('dobModal').innerText = 'Your age is: ' + age
    document.getElementById('phoneModal').innerText = 'Your phone number is: ' + phonePrint
    document.getElementById('addressModal').innerText = 'Your addres is: ' + addressPrint
    document.getElementById('cityModal').innerText = 'Your City is: ' + cityPrint
    document.getElementById('zipModal').innerText = 'Your Zip Code is: ' + zipPrint
    document.getElementById('mailModal').innerText = 'Your e-mail is: ' + emailPrint
    document.getElementById('passwordModal').innerText = 'Your password is: ' + passwordPrint

}

function confirm() {
    if (inputA == true && inputE == true && inputB == true && inputC == true && inputD == true &&
        inputF == true && inputG == true && inputH == true && inputI == true && inputK == true) {
        var firstNamePrint = document.getElementById('name').value;
        var lastNamePrint = document.getElementById('lastName').value;
        var iDNumberPrint = document.getElementById('dni').value;
        var phonePrint = document.getElementById('phone').value;
        var addressPrint = document.getElementById('address').value;
        var cityPrint = document.getElementById('city').value;
        var zipPrint = document.getElementById('postalCode').value;
        var emailPrint = document.getElementById('mail').value;
        var passwordPrint = document.getElementById('password').value;
        var confirmPasswordPrint = document.getElementById('password2').value;
        var dob = document.getElementById('dateOfBirth').value;
        var date = dob;;
        var year = date.substring(0, 4);
        var months = date.substring(5, 7);
        var day = date.substring(8, 10);
        var inputsDate = months + '/' + day + '/' + year;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
        var listKey = ['name', 'lastName', 'dni', 'phone', 'address', 'city', 'zip', 'email', 'password', 'password2', 'dob']
        var listValue = [firstNamePrint, lastNamePrint, iDNumberPrint, phonePrint, addressPrint, cityPrint, zipPrint, emailPrint, passwordPrint, confirmPasswordPrint, inputsDate]
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
    var firstNamePrint = document.getElementById('name').value;
    var lastNamePrint = document.getElementById('lastName').value;
    var iDNumberPrint = document.getElementById('dni').value;
    var phonePrint = document.getElementById('phone').value;
    var addressPrint = document.getElementById('address').value;
    var cityPrint = document.getElementById('city').value;
    var zipPrint = document.getElementById('postalCode').value;
    var emailPrint = document.getElementById('mail').value;
    var passwordPrint = document.getElementById('password').value;
    var confirmPasswordPrint = document.getElementById('password2').value;
    var dob = document.getElementById('dateOfBirth').value;
    fetch(fetchUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonResponse) {
            if (jsonResponse.success) {
                localStorage.setItem('id', jsonResponse.data.id)
                localStorage.setItem('name', firstNamePrint)
                localStorage.setItem('lastName', lastNamePrint)
                localStorage.setItem('identNumber', iDNumberPrint)
                localStorage.setItem('dateOfBirth', dob)
                localStorage.setItem('phoneNumber', phonePrint)
                localStorage.setItem('address', addressPrint)
                localStorage.setItem('city', cityPrint)
                localStorage.setItem('zipCode', zipPrint);
                localStorage.setItem('email', emailPrint);
                localStorage.setItem('password', passwordPrint);
                localStorage.setItem('confirmPassword', confirmPasswordPrint)
                alert(jsonResponse.msg + "Succesfully created");
            } else {
                alert("Error", jsonResponse.msg)
            }
        })
        .catch(function(error) {
            console.log(error)
        })
    confirmSubmit()
}

function handleOnSubmit() {
    confirm();
}
window.onload = function() {
    document.getElementById('inscription').addEventListener('submit', function(event) {
        event.preventDefault()
    })
    if (localStorage.getItem('id') != null) {
        localStorage.getItem('name', firstNamePrint)
        localStorage.getItem('lastname', lastNamePrint)
        localStorage.getItem('dni', iDNumberPrint)
        localStorage.getItem('phone', phonePrint)
        localStorage.getItem('address', addressPrint)
        localStorage.getItem('city', cityPrint)
        localStorage.getItem('zip', zipPrint)
        localStorage.getItem('email', emailPrint)
        localStorage.getItem('password', passwordPrint)
        localStorage.getItem('password2', confirmPasswordPrint)
        localStorage.getItem('dob', dob)
    }
}