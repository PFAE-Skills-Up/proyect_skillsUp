// document.body.classList.add('fade');

let urls = ["./edPerfilUsuario.html", "./areaPersonal.html", "./edPerfilPublicoUsuario.html"]; // array de los url de cada página
let options = document.querySelectorAll(".switchOption"); //captura en la variable option la clase switchOption
// Recuperar el estado del interruptor del almacenamiento local al cargar la página
window.onload = function() { //lanza un evento onload cada vez que la página se carga
    let savedState = localStorage.getItem('switchState'); // captura el estado de sitchState
    if (savedState !== null) { //si el estado guardado es diferente a null
        options[savedState].checked = true; //entonces coge la opcion checked y la iguala a true
    }
};
options.forEach(function(option, index) { //recorre el array de opciones con dos parametros 
    option.addEventListener('change', function() { 
        if (option.checked) { //si option escucha el change
            // Guardar el estado del interruptor en el almacenamiento local
            localStorage.setItem('switchState', index);
            // console.log("Redirigiendo a: " + urls[index]);
            window.location.href = urls[index];
        }
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     window.setTimeout(function() {
//         document.body.classList.remove('fade');
//     }, 100);
// });


//funcion para escribir en el input un puesto y añadirla al select
function añadirpuesto(){
    let puesto = document.getElementById("puesto");
    let inputpuesto = document.getElementById("inputpuesto").value;
    inputpuesto = inputpuesto.charAt(0).toUpperCase() + inputpuesto.slice(1)
    console.log(inputpuesto)
    let option = document.createElement("option");
    option.text = inputpuesto;
    puesto.add(option);
    document.getElementById("inputpuesto").value = ''
}