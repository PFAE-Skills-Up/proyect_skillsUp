let caja = document.getElementById("cajatexto")
let selector = document.getElementById("Formacion")

function opciones2(padre, hijo) {
    console.log(padre.value)
    console.log(document.getElementById("Formacion").value)
    // let selector = document.getElementById('boton'); // obtiene el elemento select y la caja de texto
    let selector = padre; // obtiene el elemento select y la caja de texto
    let cajatexto = hijo;
    let valorseleccionado = selector.value; // obtiene el valor seleccionado en el select
    console.log(valorseleccionado)
    cajatexto.innerHTML = valorseleccionado.charAt(0).toUpperCase() + valorseleccionado.slice(1) // escribe el valor seleccionado en la caja de texto
    // str.charAt(0).toUpperCase() + str.slice(1) <- Pone la primera letra en mayúscula.
}
console.log(document.getElementById("Formacion").value)


document.getElementById('Formacion').addEventListener("change", (event) => {
    opciones2(selector, caja)
    
})
document.getElementById('Formacion').addEventListener("change", function(){
    
    console.log(document.getElementById("Formacion").value)
})