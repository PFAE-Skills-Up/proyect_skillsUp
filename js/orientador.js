// Función que recoje el valor del select y lo muestra en la caja de texto
function opciones() {
    let selector = document.getElementById('boton'); // obtiene el elemento select y la caja de texto
    let cajatexto = document.getElementById('cajatexto');
    let valorseleccionado = selector.value; // obtiene el valor seleccionado en el select
    cajatexto.innerHTML = valorseleccionado.charAt(0).toUpperCase() + valorseleccionado.slice(1) // escribe el valor seleccionado en la caja de texto
    // str.charAt(0).toUpperCase() + str.slice(1) <- Pone la primera letra en mayúscula.
}


// Función para que al hacer click a un botón de los tres primeros botones que se ve al entrar a la pantalla, salga la pantalla a la que corresponde

// la id del boton escucha el click y dispara la función donde se recoge el id del contenedor y lo muestre en flex
document.getElementById('btn1').addEventListener("click", function () {
    document.getElementById("firstpan").style.display="flex";
});

document.getElementById('btn2').addEventListener("click", function () {
    document.getElementById("secondpan").style.display="flex";
});

document.getElementById('btn3').addEventListener("click", function () {
    document.getElementById("thirdpan").style.display="flex";
});



// Función donde al aparecer la primera pantalla los dos botones que aparece cuando de pregunta si quieres ver las otras opciones te lleve a su respectiva pantalla

//el boton escucha el click y muestra el contenedor en flex
document.getElementById('boton2').addEventListener("click", function () {
    document.getElementById("secondpan").style.display="flex";
});

document.getElementById('boton3').addEventListener("click", function () {
    document.getElementById("thirdpan").style.display="flex";
});


// Función donde al darle al botón "iniciar orientación" del aside, te aparezca el analisis completo del orientador 

// el boton de "iniciar sesión" escucha el click y muestra los tres contenedores a la vez


document.getElementById('incr').addEventListener("click", function () {
    // document.getElementById('firstpan').firstChild; // recoge el elemento de el primer hijo en el html y lo muestra debajo del elemento padre
    document.getElementById("firstpan").style.display="flex";
    //se le añadió a la clase actual de este elemento "display: none;" y se creo una clase nueva llamada 'analisis-show' para añadirle un "display: block;", se llama a la id del encabezado y se añade la nueva clase
    document.getElementById('analisiscompleto').classList.add('analisis-show');
    document.querySelector(".cajas-2-3").style.display="none";
    document.querySelector(".caja-pregunta").style.display="none";
    document.getElementById("secondpan").style.display="flex";
    document.getElementById("thirdpan").style.display="flex";
    // INTENTO de crear un elemento al hacer el click
    // document.getElementById('firstpan').appendChild(encabezado).classList.add('analisis-show', 'analisis');
    // const encabezado = document.createElement("h4")
    // const textNode = document.createTextNode("del Orientador Virtual completado");
    // let newNode = encabezado.appendChild(textNode);
    // document.getElementById('firspan')
    // let newh4 = document.getElementById('analisiscompleto').parentNode.insertBefore(newNode, document.getElementById('analisiscompleto'))
});
