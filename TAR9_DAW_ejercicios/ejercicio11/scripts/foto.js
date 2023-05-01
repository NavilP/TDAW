// Se crea el element albumView que hace referencia al id
const albumView = document.querySelector('#album-view');
let currentIndex = null;

// Esta funcion permite crear un elemento del DOM que es una imagen
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function nextPhoto(event){
    // Si se presiona Escape
    if (event.key === 'Escape'){
        hideModal();
        return;
    }

    // Si la tecla es diferente a <- o ->
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
    }

    // Guardar valor del índice actual
    let nextIndex = currentIndex;

    // Si se presiona <-
    if (event.key === 'ArrowLeft') {
        nextIndex--;
        console.log('La imagen cambió a la izquierda');
    }
    // Si se presiona ->
    else {
        nextIndex++;
        console.log('La imagen cambió a la derecha');
    }

    // Si se han sobrepasado los limites del arreglo
    if (nextIndex < 0 || nextIndex === PHOTO_LIST.length) {
        console.log('Ya no puede cambiar mas');
        return;
    }

    const photoSrc = PHOTO_LIST[nextIndex];
    modalView.innerHTML = '';
    const image = createImage(photoSrc);
    modalView.appendChild(image);
    currentIndex = nextIndex;
}

// Se crea una funcion para que al hacer clic se muestre la imagen
// La imagen se guarda en modalView pero aqui aun no esta creada
function onThumbnailClick(event) {
    currentIndex = event.currentTarget.dataset.index;
    const image = createImage(event.currentTarget.src);

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';

    modalView.appendChild(image);
    modalView.classList.remove('hidden');

    document.addEventListener('keydown', nextPhoto);
}

function hideModal(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
    document.removeEventListener('keydown', nextPhoto);
}

// Se crea una funcion para resetear los elementos de la pagina
function onModalClick() {
    hideModal();
}


// Se crea modalView
const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

for (let i = 0; i < PHOTO_LIST.length; i++){
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.dataset.index = i;
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}