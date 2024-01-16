// Creación de objeto y testeo de las validaciones

// Creación 16/01/2024 Hugo Gordillo

//Ejemplo

let user1 = new datosFormulario("Lucia Perez", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugomandi0110", "Hugomandi0110") //true

let user2 = new datosFormulario("Lucia Perez González", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugomandi0110", "Hugomandi0110") //true

let user3 = new datosFormulario("Lucia Perez", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugomandi0100", "Hugomandi0110")//false contraseña !igualdad

let user4 = new datosFormulario(" ", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugomandi0110", "Hugomandi0110")// false !nombre

let user5 = new datosFormulario("Luc1a Perez", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugomandi0110", "Hugomandi0110") //false !nombre

let user6 = new datosFormulario("Lucia Perez", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugom@ndi0110", "Hugom@ndi0110")//false contraseña !alfanumerico

let user7 = new datosFormulario("Lucia Perez", "test2@mail.com", "Ciclo Superior", "Informatico", "Hugo0", "Hugo0")//false contraseña !longitud

let user8 = new datosFormulario("Lucia Perez", "test2@mail", "Ciclo Superior", "Informatico", "Hugomandi0110", "Hugomandi0110") //false !email

let user9 = new datosFormulario("Lucia Perez", "test2mail.com", "Ciclo Superior", "Informatico", "Hugomandi0110", "Hugomandi0110") //false !email

let user10 = new datosFormulario("Lucia Perez", "test2@mail.com", "    ", "Informatico", "Hugomandi0110", "Hugomandi0110") //false !formación

let user11 = new datosFormulario("Lucia Perez", "test2@mail.com", "", "Informatico", "Hugomandi0110", "Hugomandi0110") // false !formación 

let user12 = new datosFormulario("Lucia Perez", "test2@mail.com", "Ciclo Superior", "", "Hugomandi0110", "Hugomandi0110") //false !puesto

function comprobar(user) {
    var result = validarFormulario(user);
    if (result === null) {
        console.log("El formulario es válido");
        return true
    } else {
        console.log("Error en el formulario: " + result);
        return false
    }
}

console.log("USER1", comprobar(user1), "\n");
console.log("USER2", comprobar(user2), "\n");
console.log("USER3", comprobar(user3), "\n");
console.log("USER4", comprobar(user4), "\n");
console.log("USER5", comprobar(user5), "\n");
console.log("USER6", comprobar(user6), "\n");
console.log("USER7", comprobar(user7), "\n");
console.log("USER8", comprobar(user8), "\n");
console.log("USER9", comprobar(user9), "\n");
console.log("USER10", comprobar(user10), "\n");
console.log("USER11", comprobar(user11), "\n");
console.log("USER12", comprobar(user12), "\n");