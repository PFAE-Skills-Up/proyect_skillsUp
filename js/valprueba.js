let nombreApellidos = document.getElementById("nombreApellidos");
let email = document.getElementById("email");
let formacion = document.getElementById("formacion");
let puestos = document.getElementById("puestos");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");

// function recogeVal(){
//     event.preventDefault()
//     nombreApellidos = nombreApellidos.value;
//     email = email.value;
//     formacion = formacion.value;
//     puestos = puestos.value;
//     password = password.value;
//     rePassword = rePassword.value;

//     console.log(nombreApellidos, email, formacion, puestos, password, rePassword)
//     validarNombreApellidos(nombreApellidos);
//     validarEmail(email);
//     validarText(formacion);
//     validarText(puestos);
//     valPassword(password, rePassword);
// }

function validarNombreApellidos(nombreApellidos) {
    const name = nombreApellidos.trim();
    // const name = nombreApellidos;
    // const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    // const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/;;
    
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s-][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)+(?:[\s-][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    
    //console.log("sin limpiar: ", nombreApellidos, " y limpio: ", name)
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        console.log("nombre falso")
        return false
    } else {
        
        console.log("nombre verdadero")
        return true
    }
}

function valAlfaNum(text) {
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ0-9]+$/;
    return pattern.test(text)
}

function valIgual(text, text1) {
    return text === text1
}

function valLeng(text) {
    return text.length > 8
}

function valPassword(pass1, pass2) {
    if (valLeng(pass1)) {
        console.log("Longitud válida");
    } else {
        console.log("Longitud no válida");
        return false
    }
    if (valAlfaNum(pass1)) {
        console.log("Es Alfanumérico");
    } else {
        console.log("No es alfanumérico");
        return false
    }
    if (valIgual(pass1, pass2)) {
        console.log("Son iguales");
        return true
    } else {
        console.log("No son iguales");
        return false
    }
}

function validarText(texto) {
    const text = texto.trim()
    // const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[ -][a-zA-ZáéíóúüñÁÉÍÓÚÑ]]+)*$/;
    const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/;
    if (typeof text !== 'string' || text === "" || !pattern.test(text)) {
        console.log("text false");
        return false
    } else {
        console.log("text true");
        return true
    }
}

// ni caracteres especiales
// ni que sean solo numeros

function validarEmail(correo) {
    const email = correo.trim()
    const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //console.log("sin limpiar: ", correo, "y limpio: ", email)
    if (typeof email !== 'string' || email === "" || !pattern.test(email)) {
        //console.log("entro en el if")
        console.log("email false");
        return false
    } else {
        console.log("email true");
        return true
    }
}

function datosFormulario(){
    this.nombreApellidos = nombreApellidos.value;
    this.email = email.value;
    this.formacion = formacion.value;
    this.puestos = puestos.value;
    this.password = password.value;
    this.rePassword = rePassword.value;
}

function crearUser(){
    event.preventDefault();
    let user = new datosFormulario();
    comprobar(user);
    console.log(user)
}

function comprobar(user) {
    var result = validarFormulario(user);
    if (result === null) {
        console.log("El formulario es válido");
        window.location.href = '#msj-reCort-modal';
        return true
    } else {
        console.log("El formulario no es válido");
        console.log("Error en el formulario: " + result);
        return false
    }
}

function validarFormulario(datosFormulario) {
    const nombreVal = validarNombreApellidos(datosFormulario.nombreApellidos);
    const emailVal = validarEmail(datosFormulario.email);
    const formacionVal = validarText(datosFormulario.formacion);
    const puestosVal = validarText(datosFormulario.puestos);
    const passwordVal = valPassword(datosFormulario.password, datosFormulario.rePassword);

    if (!nombreVal) {
        document.getElementById("nombreApellidos").style.border = "1px solid red";
        document.getElementById("nombreApellidos").style.backgroundColor = "var(--rojo)";
        document.getElementById("nombreApellidos").value= "";
        document.getElementById("nombreApellidos").placeholder = "Nombre no válido";
        // document.getElementById("nombreApellidos").placeholder.style.color = "red";
        return "Nombre y apellidos no válido"
    } else {
        document.getElementById("nombreApellidos").style.border = "1px solid black";
        document.getElementById("nombreApellidos").style.backgroundColor = "#d5effa";
    }
    if (!emailVal) {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("email").style.backgroundColor = "var(--rojo)";
        document.getElementById("email").value= "";
        document.getElementById("email").placeholder = "Email no válido";
        return "Email no válido"
    } else {
        document.getElementById("email").style.border = "1px solid black";
        document.getElementById("email").style.backgroundColor = "#d5effa";
    }
    if (!formacionVal) {
        document.getElementById("formacion").style.border = "1px solid red";
        document.getElementById("formacion").style.backgroundColor = "var(--rojo)";
        document.getElementById("formacion").value= "";
        document.getElementById("formacion").placeholder = "Formación no válida";
        return "Formación no válida"
    } else {
        document.getElementById("formacion").style.border = "1px solid black";
        document.getElementById("formacion").style.backgroundColor = "#d5effa";
    }
    
    if (!puestosVal) {
        document.getElementById("puestos").style.border = "1px solid red";
        document.getElementById("puestos").style.backgroundColor = "var(--rojo)";
        document.getElementById("puestos").value= "";
        document.getElementById("puestos").placeholder = "Puesto no válido";
        return "Puesto no válido"
    } else {
        document.getElementById("puestos").style.border = "1px solid black";
        document.getElementById("puestos").style.backgroundColor = "#d5effa";
    }
    
    if (!passwordVal) {
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("password").style.backgroundColor = "var(--rojo)";
        document.getElementById("rePassword").style.border = "1px solid red";
        document.getElementById("rePassword").style.backgroundColor = "var(--rojo)";
        document.getElementById("password").value= "";
        document.getElementById("password").placeholder = "Contraseña no válida";
        document.getElementById("rePassword").value= "";
        document.getElementById("rePassword").placeholder = "Contraseña no válida";
        return "Contraseña no válida"
    } else {
        document.getElementById("password").style.border = "1px solid black";
        document.getElementById("rePassword").style.border = "1px solid black";
        document.getElementById("password").style.backgroundColor = "#d5effa";
        document.getElementById("rePassword").style.backgroundColor = "#d5effa";
    }

    // if ()

    return null //"con Null representamos que no hay errores"
}