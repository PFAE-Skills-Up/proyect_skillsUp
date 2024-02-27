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




    var lista = document.querySelectorAll('.comp-ranking-li li');
    var perfilDiv = document.getElementById('UserComparado');
    lista.forEach(function(element) {
        console.log("Elemento de la lista:", element);
        element.addEventListener('click', function() {
            var nombre = element.textContent.trim();
            console.log("Mostrando perfil de:", nombre);
            // perfilDiv.querySelector('h2').textContent = "El perfil " + nombre;
            // console.log("Nombre seleccionado:", nombre);
            console.log(perfilDiv)
            perfilDiv.innerHTML=`<h2>Perfil de ${nombre}</h2><h4>Desarrolladora Full Stack</h4>
            <div class="comp-tarj-cont">
            <div class="comp-tarj-int" id="caja2-tarj1"  style="background-color: lightgreen">
                <p>Programación:</p>
                <ul>
                    <li>Competencias: Experiencia con frameworks de frontend como React, Angular o Vue.js. Competencia en uno o más lenguajes de backend, como Python y PHP</li>
                    <br>
                    <li>Dónde las adquirió: A traves de un Bootcamp de Back-end y participación en proyectos prácticos o de código abierto.</li>
                </ul>
            </div>
            <div class="comp-tarj-int" id="caja2-tarj2">
                <p>Conocimientos Básicos de Sistemas Operativos:</p>
                <ul>
                    <li>Competencias: Comprender y trabajar con sistemas operativos comunes.</li>
                    <br>
                    <li>Dónde las adquirió: En cursos académicos de sistemas operativos y a través de la práctica en entornos informáticos durante estudios universitarios.</li>
                </ul>
            </div>`
        });
    });
    console.log("El DOM se ha cargado");
console.log("Número de elementos en la lista:", lista.length);
