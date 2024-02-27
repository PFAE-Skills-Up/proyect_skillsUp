// Funcion para modal de preguntas cortas

const acordeon = document.getElementsByClassName('acordeon-contenedor');

for (i=0; i<acordeon.length; i++) {
    acordeon[i].addEventListener('click', function () {
        this.classList.toggle('activa')
    })
}