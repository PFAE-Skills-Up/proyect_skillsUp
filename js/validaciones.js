//Validaciones para el formulario de registro
//Validar nombre y apellidos
function validarNombreApellidos(nombreApellidos) {
    const name = nombreApellidos.trim();
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    //console.log("sin limpiar: ", nombreApellidos, " y limpio: ", name)
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        return false
    } else {
        return true
    }
}
//Validar contraseñas (Comprueba que las contraseñas sean alfanuméricas, mayor de 8 caracteres y sean iguales)
//Función para validar Alfanumerico
function valAlfaNum(text) {
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ0-9]+$/;
    return pattern.test(text)
}
//Funcion para validar que sean iguales dos campos
function valIgual(text, text1) {
    return text === text1
}
//Función para validar la longitud
function valLeng(text) {
    return text.length > 8
}
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
//Validar que hay texto (Esta función sería para Formación y Puestos los que aspira)
function validarText(texto){
    const text = texto.trim()
    if (typeof text !== 'string' || text === ""){
        return false
    } else {
        return true
    }
}
//Validar Email
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
