//===================Validaciones para el formulario de registro corto=====================

//Validar nombre y apellidos

function validarNombreApellidos(nombreApellidos) {
    const name = nombreApellidos.trim();
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        return false
    } else {
        return true
    }
}

//========================================

//================Validar contraseñas (Comprueba que las contraseñas sean alfanuméricas, mayor de 8 caracteres y sean iguales)===================


//Función para validar Alfanumerico

function valAlfaNum(text) {
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ0-9]+$/;
    return pattern.test(text)
}

//========================================

//Funcion para validar que sean iguales dos campos

function valIgual(text, text1) {
    return text === text1
}

//========================================

//Función para validar la longitud

function valLeng(text) {
    return text.length > 8
}

//========================================

function valPassword(pass1, pass2) {
    if (valLeng(pass1)) {
        console.log("Longitud válida");
    } else{
        console.log("Longitud no válida");
        return false
    }
    if (valAlfaNum(pass1)) {
        console.log("Es Alfanumérico");
    } else{
        console.log("No es alfanumérico");
        return false
    }
    if (valIgual(pass1, pass2)) {
        console.log("Son iguales");
        return true
    } else{
        console.log("No son iguales");
        return false
    }
}

//========================================

//==================Función para validar que hay texto (Esta función sería para Formación y Puestos los que aspira)====================
function validarText(texto){
    const text = texto.trim()
    if (typeof text !== 'string' || text === ""){
        return false
    } else {
        return true
    }
}


//========================================

//=======================Función para validar Email==========================

function validarEmail(correo) {
    const email = correo.trim()
    const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //console.log("sin limpiar: ", correo, "y limpio: ", email)
    if (typeof email !== 'string' || email === "" || !pattern.test(email)) {
        //console.log("entro en el if")
        return false
    } else {
        return true
    }
}


//========================================

//================Creación de objeto y testeo de las validaciones==============

// Creación 16/01/2024 Hugo Gordillo


function datosFormulario(nombreApellidos, email, formacion, puestos, password, rePassword) {
    this.nombreApellidos = nombreApellidos;
    this.email = email;
    this.formacion = formacion;
    this.puestos = puestos;
    this.password = password;
    this.rePassword = rePassword;
}

function validarFormulario(datosFormulario) {
    const nombreVal = validarNombreApellidos(datosFormulario.nombreApellidos);
    const emailVal = validarEmail(datosFormulario.email);
    const formacionVal = validarText(datosFormulario.formacion);
    const puestosVal = validarText(datosFormulario.puestos);
    const passwordVal = valPassword(datosFormulario.password, datosFormulario.rePassword);

    if (!nombreVal) {
        return "Nombre y apellidos no válido"
    }

    if (!emailVal) {
        return "Email no válido"
    }

    if (!formacionVal) {
        return "Formación no válida"
    }

    if (!puestosVal) {
        return "Puesto no válido"
    }

    if (!passwordVal) {
        return "Contraseña no válida"
    }

    return null //"con Null representamos que no hay errores"
}




