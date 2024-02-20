let indice = 0; // Variable global para guardar el índice de la imagen actual

// Definir un array con el contenido para cada índice
const contenidoArray = [
    '<p class="">En esta sección dispones de la posibilidad de generar un perfil en el que definirás los aspectos más revelantes de tu currículum vitae. </p> <div> <ul class="tutorial-cont-lista"> <li class="">Datos personales</li> <li class="">Conocimientos</li> <li class="">Formación</li> <li class="">Idiomas</li> <li class="">Experiencia</li> </ul> </div> <p class="">Puedes seleccionar los puestos de trabajo de tu interés</p>',

    '<p class="">Podrás seleccionar el puesto de trabajo al que te gustaría acceder y el sistema identificará aquellas competencias que tienes de las que se requieren para dicho puesto.</p>De cada puesto de empleo se extraen las competencias necesarias. </p>',

    '<p class="">El sistema mediante el análisis de tu perfil y los puestos de trabajo a los que te gustaría acceder genere recomendaciones de acciones que deberías realizar para mejorar tu empleabilidad.</p> <div> <ul class="tutorial-cont-lista"> <li class="">Mejorar determinadas competencias.</li> <li class="">Realizar cursos de formación indicados por otros usuarios.</li> <li class="">Mejorar la información sobre tu CV</li> </ul> </div>',

    '<p class="">Podrás compartir con el resto de la comunidad aquellos recursos formativos que has utilizado para adquirir tus competencias.</p>Dichas propuestas de formación podrán ser evaluadas por la comunidad a través de valoraciones que quedarán registradas. </p>',

    '<p class="">Podrás localizar perfiles de otros usuarios de la comunidad que estén interesados en los mismos puestos de trabajo.</p>Además, tendrás un top 10 de los mejores perfiles de la, comunidad para un puesto determinado, y así, podrás identificar que puedes mejorar tú para poder ser más empleable.</p>',

    '<p class="">En este área podrás ver todos los perfiles públicos de los miembros de la comunidad.</p>',

    '<img src="img/img-chat_alto.png" alt="imagen del chat">'
];

const contenidoArray2 = [
    '<p class="">También puedes definir tu perfil público en base a la información aportada en la plataforma.</p><p class="">Configura tu perfil público seleccionando únicamente aquella información que quieres que sea visible.</p><p class="">La plataforma dispone de un área en la que otros usuarios comparten sus perfiles y los visitantes solo verán los públicos.</p>',

    '<p class="">El sistema te indicará qué competencias debería adquirir para tener más posibilidades de acceder a dicho puesto. Para ello hará uso de una API desarrollada por la FULP para la detección de dichas competencias a partir de tu currículum vitae.</p><p class="">También te indicará la posición estimada en un ranking, teniendo en cuenta las competencias que tengas,  para el acceso a un puesto de trabajo determinado con respecto a los demás usuarios de la comunidad.</p>',

    '<p class="">Este sistema de recomendación se basará  tanto en la  información de su currículum vitae como de otra información que se te solicitará en relación a las acciones que estás realizando a la hora de buscar empleo.</p>',

    '<p class="">También podrás localizar las distintas propuestas de formación compartidas por los usuarios, así como las valoraciones realizadas de cada una de ellas</p>',

    '<p class="">Por último, podrás comparar tu perfil con el de otro usuario y obtendrás:</p> <div> <ul class="tutorial-cont-lista"> <li class="">Las competencias que dispone el otro usuario de interés para el puesto al que quieres acceder y no se encuentran en tu perfil.</li> <li class="">Se te indicará la forma en la que ese usuario obtuvo dicha competencia (curso de formación, estudios de grado etc.)</li> </ul> </div>',

    '<p class="">Si estás buscando un empleado para tu empresa, este es el sitio que buscas.</p>',

    '<p class="">Aquí podrás chatear y comunicarte con otros usuarios de la comunidad.</p>',
];

function cambiarContenido() {
    const images = document.getElementsByClassName('img-flecha');
    const contenido = document.getElementById('caja1');
    const contenido2 = document.getElementById('caja2');

    indice = (indice + 1) % images.length; // Incrementar el índice y asegurarse de que no se salga del rango

    if (indice === 0) {
        // Llegamos al final del array, mostrar modal
        const modal = document.getElementById('tut-modal');
        modal.style.display = 'block';

        // Configurar las opciones del modal
        const volverBtn = document.getElementById('volverBtn');
        const enlaceBtn = document.getElementById('avanzarBtn');

        volverBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        enlaceBtn.addEventListener('click', () => {
            // Redirigir a otra página
            window.location.href = 'areaPersonal.html';
        });
    }
    for (let i = 0; i < images.length; i++) {
        const currentImage = images[i];

        if (i === indice) {
            currentImage.style.display = "inline-flex";
            contenido.innerHTML = contenidoArray[i];
            contenido2.innerHTML = contenidoArray2[i];
        } else {
            currentImage.style.display = "none";
        }
    }
}