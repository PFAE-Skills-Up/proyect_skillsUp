let show1 = document.getElementById('card-show')
let show2 = document.getElementById('card-show2')
let show3 = document.getElementById('card-show3')
let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let card3 = document.getElementById('card3')

let cards = document.querySelectorAll('.card-show')

console.log(show1, card1);
console.log(cards)

cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        console.log('detecto raton', pageX, pageY)
        console.log(card.parentElement.nextElementSibling) // <= Elemento que busca al padre y luego al hermano para llegar a div de la tarjeta.
        card.parentElement.nextElementSibling.classList.add('recomend-tarjeta-propuesta-enseñar');
    });

    card.addEventListener('mouseleave', () => {
        card.parentElement.nextElementSibling.classList.remove('recomend-tarjeta-propuesta-enseñar');
    })

});



/**
 * Función que detecta donde está el ratón al hacer click.
 * @param {*} e 
 * @returns 
 */
function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
    return pageX, pageY
}
//Dudas sobre si esta parte de la función es realmente necesaria
// if (document.attachEvent) document.attachEvent('onclick', handler);
// else document.addEventListener('click', handler);



//Función para desactivar los elementos en caso de que el usuario no tenga añadido Puesto de Trabajo en su Área Personal

//  Variables para capturar los valores de los elementos a desactivar 
let selectRec = document.getElementById("select-puestos");
let botonRec = document.getElementById("buton-recomend");
let textRec = document.querySelectorAll('[name="textarea"]');
let inputRec = document.querySelectorAll('[type="radio"]');

//Evento de escucha al hacer "click en el Select"
selectRec.addEventListener('click', turnOff)

//Con un IF/ELSE se comprueba si la cantidad de Option del Select "Puestos" cumple la condición y en base a ello se desactivan o no los elementos interactivos
function turnOff() {

    if (selectRec.children.length <= 1) { //Se captura la longitud de los hijos del Select (Options)


        textRec.forEach((element) => {   //Se recorren los Textarea y se desactivan
            element.disabled = true;
        })
        inputRec.forEach((element) => {  //Se recorren los Input y se desactivan
            element.disabled = true;
        });
        botonRec.disabled = true; //Se desactiva el botón

        //Aquí se muestra el párrafo oculto en HTML y se le añaden o quitan las clases CSS
        document.getElementById("parrafo-recomend").innerHTML = "No tienes puestos de trabajo añadidos. Por favor, ve a tu Área Personal."
        document.getElementById("parrafo-recomend").classList.add('parrafo-fades')
        setTimeout(() => { document.getElementById("parrafo-recomend").classList.remove('parrafo-fades') }, 3000)

        //En caso que se cumpla la condición, los elementos quedan activos
    } else {
        console.log('desactivando')
        textRec.forEach((element) => {
            element.disabled = false;
        })
        inputRec.forEach((element) => {
            element.disabled = false;
        });
        botonRec.disabled = false;
    }
};









