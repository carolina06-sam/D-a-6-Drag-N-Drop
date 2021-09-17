"use strict";
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
fill.addEventListener(
    "dragstart",
    dragStart
); /* dragstart(el usuario inicia el arrastre del elemento) es el evento que va a escuchar y luego va hacer lo que este en la funcion dragStart esto se le hace al elemento con clase fill en html*/
fill.addEventListener(
    "dragend",
    dragEnd
); /* drasend es el otro evento que esera este es cuando se termina el arrastre */
/* for me recorre todos los elementos(array) de la const empties la vaiable cons empty no es necesario definirla y generalmente se usa son el en singular de lo que quiero recorrer */
/* cuando al elemeto de html en este caso empty se le haga el evento "x" ej dragover el elemto esta spbrre la zona de soltado va hacer lo que este  en la funcion dragOver */
for (const empty of empties) {
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
    /*   console.log(empty); */
}

/* funciones de las casillas vacias */
function dragStart() {
    console.log("drag start");
    fill.classList.add("hold");
    /*  this.className += " hold"; */
    setTimeout(
        () => (this.className = "invisible"),
        0
    ); /* hace que cuando se tome el Elemento este quede en blanco  */
}
function dragEnd() {
    console.log("drag end");
    this.className +=
        " fill"; /* this hace referencia a lo que esta ejecutanto la funcion eneste caso a emty que deja de estar vacio a estar lleno cuando se suelta la imagen
   /*  empty.classList.add("fill"); */
}
function dragOver(e) {
    console.log("drag over");
    e.preventDefault();
    /*  Reset the current drag operation to "none". Restablece la operación de arrastre actual a "ninguna". si no tuviera el default regresa el elemento a la primera casilla*/
}
function dragEnter(e) {
    console.log("drag enter");
    e.preventDefault(); /* Rechace la selección inmediata del usuario como posible elemento objetivo. */
    this.className +=
        " hovered"; /* le agrega esta clase siempre que se haga dragenter que seria como estar dentro de la cajita*/
    /* empty.classList.add("hovered"); */
}
function dragLeave() {
    console.log("drag leave");
    this.className =
        "empty"; /* EN EL MOMENTO QUE DEJO LA CAJA CAMBIA LA CLASE A VACIA  */
}
function dragDrop() {
    console.log("drag drop");
    this.className = "empty";
    this.append(fill); /* agrega fill a empty */
}

/* hacemos un llamado de las clases vacio y lleno a travez de querySelector(All) luego a la const Fill le pasamos un metodo que espere un evento en la ṕrimero start es cuando el usuario inicia la eleccion y el arrastre de la imagen y el end es cuando se termino el arrastre

luego se le hace un recorrido con un for que lo que hace es crear una const para recorrer las clases llamadas en este caso empties.

ese for espera varios eventos dragover es cuando se pasa por encima y va unido al dragenter que  es cuando se selecciona luego el leave que sucede cuando se deja el, cuadro y drag drop que es cuando se suelta el la caja deseada todo sucede muy rapido y aqui terminaria con dragend

Luego de cada evento esta el nombre de la funcion (segunda palabra inicia en mayuscula)

function dragStart es la caja de inicio que contiene la imagen luego se le agrega una clases de espera hold y el metodo setTimeout () llama a una funcion que seria volverlo "invisible " en un tiempo determinado , en este caso no esta definido

function dragEnd al elemento que seria la caja de eleciion final le agrega la clase fill que tiene los estilos en css

function dragOver pasa el evebto que en este caso es pasar por encima y luego le da un defaul lo que hace es que el elemnto no se devuelva

function dragEnter se le agrega la clase de espera (holdred) estilos en css al seleccionar al elemento 

function dragLeave le agrega la clase de vacio cuando el elemnto seleccionado ess dejado

function dragDrop es cuando el elemto seleccionado es soltado en la nueva caja 

*cuando se selecciona la imagen de la casilla inicial y se mueve a la casilla de eleccion
drag start
drag enter
drag over
drag leave
*cuando se arrastra a la imagen de eleccion 
drag enter
drag over
drag drop
drag end




*/
