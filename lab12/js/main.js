for (let i = 0; i < PHOTO_LIST.length; i++) {
    const albumView = document.querySelector('#album-view');
    let image = document.createElement('img');
    const photoSrc = PHOTO_LIST[i];
    const THUMBNAIL = new Miniatura(photoSrc);
    image = THUMBNAIL.createImage();
    image.dataset.index = i;

    
    image.addEventListener("click", (event) =>{
        modalView = new ModalScreen(event.currentTarget.dataset.index);
        modalView.mostrar(event.currentTarget.src);
    });

    albumView.appendChild(image);
}