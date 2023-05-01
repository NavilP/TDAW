// Funcion para imprimir en consola que se hizo clic
function onClick(){
    console.log("hiciste clic");
}

// Recuperar el boton del archivo HTML
const button = document.querySelector('#boton');

// Agregar el listener
button.addEventListener('click',onClick);