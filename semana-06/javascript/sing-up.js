// VARIABLES PARA CORROBORAR FORMULARIO COMPLETO CORRECTAMENTE //
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

//------------------NAME-----------------// FALTARIA NEGAR QUE SEA NUMBER

// verificar que el nombre sea un string
// verificar que tenga un espacio en medio
//verifivar que tenga mas de 6 caracteres

function verifyName() {
    const abc = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const name = document.getElementById('name').value;
    //aca verificamos que sea un nombre
    for (let i = 0; i < name.length; i++) {
        if (!abc.includes(name[i].toLowerCase())) {
            document.getElementById('name').style.border = "3px solid red";
            document.getElementById('pName').classList.remove("errorName");
            inputA = false


        }
    }

    if (name.length < 3) {
        document.getElementById('name').style.border = "3px solid red";
        document.getElementById('pName').classList.remove("errorName");
        inputA = false
    } else {
        document.getElementById('name').style.border = "3px solid green";
        inputA = true;
    }
}

//---------------------LAST NAME------------------//

function verifyLastName() {
    const abc = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const lastName = document.getElementById('lastName').value;
    //aca verificamos que sea un nombre
    for (let i = 0; i < lastName.length; i++) {
        if (!abc.includes(lastName[i].toLowerCase())) {
            document.getElementById('lastName').style.border = "3px solid red";
            document.getElementById('p-last-Name').classList.remove("error-last-Name");
            inputE = false;
            return ("escribe respuesta correcta");

        }
    }

    if (lastName.length < 3) {
        document.getElementById('lastName').style.border = "3px solid red";
        document.getElementById('p-last-Name').classList.remove("error-last-Name");
        inputE = false;
    } else {
        document.getElementById('lastName').style.border = "3px solid green";
        inputE = true;
    }

}



//--------------------EMAIL-----------------------//
function verifyMail() {
    var correo = document.getElementById('mail').value;


    const arroba = correo.indexOf("@");
    const punto = correo.lastIndexOf(".");
    if (arroba !== -1 && punto !== -1) {
        if (arroba > 0 && punto > arroba + 1 && punto < correo.length - 1) {
            document.getElementById("mail").style.border = "3px solid green";

            inputB = true;

        } else {

            document.getElementById("mail").style.border = "3px solid red";
            document.getElementById('pMail').classList.remove("errorEmail");
            inputB = false;
        }
    } else {
        document.getElementById('pMail').classList.remove("errorEmail");
        document.getElementById("mail").style.border = "3px solid red";
        inputB = false;
    }


}

//---------------------PASSWORD-----------------------/ 
//la contraseña debe tener como minimo de 8 caracteres
//no debe contener espacios
// debe ser alfanumerica


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
    if (password.length >= 8) {
        document.getElementById('password').style.border = "3px solid green";
        inputC = true;
    } else {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("pPassword").classList.remove("passwordError");
        inputC = false;
    }
    if (letras <= 0 || nume <= 0 || password.indexOf(" ") > -1) {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("pPassword").classList.remove("passwordError");
        inputC = false;
    } else {
        document.getElementById('password').style.border = "3px solid green";
        inputC = true;
    }
}

//---------------------PASSWORD 2-----------------------/ /
function verifyPassword2() {
    const p1 = document.getElementById("password").value;
    const p2 = document.getElementById("password2").value;
    if (p1 === p2) {
        document.getElementById("password2").style.border = "3px solid green";
        inputD = true;
    } else {
        document.getElementById("pPassword2").classList.remove("password2Error");
        document.getElementById("password2").style.border = "3px solid red";
        inputD = false;
    }
}


//-------------------AGE------------------------//

// function verifyAge() {
//     var age = document.getElementById('age').value;

//     if (age <= 17) {
//         document.getElementById('pAge').classList.remove("errorAge");
//         document.getElementById('age').style.border = "3px solid red";
//     } else {
//         alert("autorizado");
//         document.getElementById('age').style.border = "3px solid green";
//         inputE = true;

//     }

// }

//----------------------BIRTH DATE--------------------//


/*function verifyAge(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

var edad = verifyAge("2000/08/10");
if (edad >= 18) {
    alert("Eres mayor de edad :D ");
    alert(verifyAge(document.getElementById('fechanaci').value))
} else {
    alert("Eres menor de edad :( ");
}
*/


//-----------PHONE-----------------// input type number
function phoneNumber() {
    var phone = document.getElementById("phone").value;
    if (phone.length < 7) {
        document.getElementById("phone").style.border = "3px solid red";
        document.getElementById("pPhone").classList.remove("errorPhone");
        inputF = false;
    } else {
        document.getElementById("phone").style.border = "3px solid green";
        inputF = true;
    }
}


//-----------Domicile--------------//
// debe tener espacio entre medio
//debe tener letras y numeros
// debe superar los 5 caracteres

function verifyAdress() {
    var adress = document.getElementById("adress").value
    if (adress.indexOf(" ") > -1 && adress.indexOf(" ") < adress.length - 2) {
        if (adress.length > 5) {
            document.getElementById("adress").style.border = '3px solid green';
            inputG = true;

        } else {
            document.getElementById("adress").style.border = '3px solid red';
            document.getElementById('pAdress').classList.remove('errorAdress');
            inputG = false;
        }

    } else {
        document.getElementById("adress").style.border = '3px solid red';
        document.getElementById('pAdress').classList.remove('errorAdress');
        inputG = false;
    }
}

//--------------------CITY-------------------//
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

//------------------Postal Code-----------------//

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

//----------------DNI-------------------------/
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
// saludo

/*document.addEventListener("keydown", function(event) {
    console.log("hola")
    const name = document.getElementById("name").value;
    document.getElementById("great").value = name
})
*/
/*function greeting(event) {
    //     leer nombre
    const name = document.getElementById("name").value;
    // document.getElementById("great").value = name;
    // si keyCode === espacio en blanco ó keyCode >= 65 y  keyCode <= 90
    if (keyCode === " " || (keyCode >= 65 && keyCode <= 90)) {
        name += event.key;
    } else if (keycode === 8) {
        name.substring(0, name.length - 1)
    } else {
        document.getElementById("great") = name;
    }
}*/
function blurDni() {
    dni()
}
// nombre .= event.key
// 14:44
// de lo contrario
// 14:44
// si keyCode === 8
// 14:44
// nombre.substr(0,nombre.length-1)
// 14:44
// doc. geteleÇ().v = name
// funciones focus
//part one
function correccionName() {
    // document.querySelector('.errorName').classList.add("errorName");
    document.getElementById("pName").classList.add('errorName');
    document.getElementById("name").style.border = "5px solid lightgray";
}

function correctionLastName() {
    document.getElementById('lastName').style.border = "5px solid lightgray";
    document.getElementById('p-last-Name').classList.add("error-last-Name");
}

function correccionMail() {
    document.getElementById("mail").style.border = "5px solid lightgray";
    document.getElementById('pMail').classList.add('errorEmail');
}

function correccionPass() {
    document.getElementById("password").style.border = "5px solid lightgray";
    document.getElementById('pPassword').classList.add("passwordError");
}

function correccionPass2() {
    document.getElementById("password2").style.border = "5px solid lightgray";
    document.getElementById('pPassword2').classList.add('password2Error');
}

function correccionAge() {
    document.getElementById("age").style.border = "5px solid lightgray";
    document.getElementById("pAge").classList.add("errorAge");
}
//part two
function correccionPhone() {
    document.getElementById("phone").style.border = '5px solid Lightgray';
    document.getElementById("pPhone").classList.add("errorPhone");
}

function correccionAdress() {
    document.getElementById("adress").style.border = '5px solid lightgray';
    document.getElementById('pAdress').classList.add("errorAdress");
}

function correccionCity() {
    // document.getElementById('city').style.border = '5px solid lightgray';
    // document.getElementById('citytext').classList.add("errorCity ");
    document.getElementById("city").style.border = "5px solid lightgray";
    document.getElementById("cityText").classList.add("errorCity")
}

function correccionCode() {
    // document.getElementById('postalCode').style.border = '5px solid lightgray';
    // document.getElementById('postalText').classList.add("errorCode ");
    document.getElementById("postalCode").style.border = "5px solid lightgray";
    document.getElementById("postalText").classList.add("errorCode")

}

function correccionDni() {
    document.getElementById('dni').style.border = '5px solid lightgray';
    document.getElementById('dniText').classList.add('errorDni')
}

//--------------------Cartel Emergente----------------------//
var firstNamePrint = document.getElementById("name").value;

var lastNamePrint = document.getElementById("lastName").value;

var iDNumberPrint = document.getElementById("dni").value;

var phonePrint = document.getElementById("phone").value;

var addressPrint = document.getElementById("adress").value;

var cityPrint = document.getElementById("city").value;

var zipPrint = document.getElementById("postalCode").value;

var emailPrint = document.getElementById("mail").value;

var passwordPrint = document.getElementById("password").value;

var confirmPasswordPrint = document.getElementById("password2").value;

function confirmSubmit() {
    alert(
        "Your first name is: " + firstNamePrint +
        "\nYour last name is: " + lastNamePrint +
        "\nYour ID Number is: " + iDNumberPrint +
        "\nYour phone number is: " + phonePrint +
        "\nYour address is: " + addressPrint +
        "\nYour city is: " + cityPrint +
        "\nYour zip code is: " + zipPrint +
        "\nYour email is: " + emailPrint +
        "\nYour password is: " + passwordPrint +
        "\nYour confirm password is: " + confirmPasswordPrint
    )
}

function confirm() {
    if (inputA == true && inputE == true && inputB == true && inputC == true && inputD == true && inputF == true && inputG == true && inputH == true && inputI == true) {
        alert(confirmSubmit())
    } else {
        alert('Please, enter valid values')
    }
}

function handleOnSubmit() {
    verifyName();
    verifyMail();
    verifyPassword1();
    verifyPassword2();
    // verifyAge();
    phoneNumber();
    verifyAdress();
    fromcity();
    code();
    dni();
    verifyLastName();
    confirm();
}
window.onload = function() {
    document.getElementById("inscription").addEventListener('submit', function(event) {
        event.preventDefault()
    })

}