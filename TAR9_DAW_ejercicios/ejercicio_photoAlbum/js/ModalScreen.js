class ModalScreen {
    constructor(index) {
        this.mostrar();
        this.ocultar();
        this.hideView();
        this.index = index;
        this.nextPhoto();
    }

    mostrar(src) {
        const modalView = document.querySelector('#modal-view');
        document.body.classList.add('no-scroll');
        modalView.style.top = window.pageYOffset + 'px';

        const modalPhoto = new ModalPhoto(src);
        const image = modalPhoto.createImage();

        modalView.appendChild(image);
        modalView.classList.remove('hidden');

        document.addEventListener('keydown', (event) =>{
            this.nextPhoto(event.key, this.index);
        });
    }

    hideView() {
        const modalView = document.querySelector('#modal-view');
        document.body.classList.remove('no-scroll');
        modalView.classList.add('hidden');
        modalView.innerHTML = '';
    }

    ocultar() {
        const modalView = document.querySelector('#modal-view');
        modalView.addEventListener('click', this.hideView);
    }

    nextPhoto(key) {
        const modalView = document.querySelector('#modal-view');

        if (key === 'Escape') {
            this.hideView();
            return;
        }

        if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
            return;
        }

        
        let newIndex = this.index;
        if (key === 'ArrowLeft') {
            newIndex--;
        } else {
            newIndex++;
        }

        if (newIndex < 0 || newIndex === PHOTO_LIST.length) {
            return;
        }
        else{
            const photoSrc = PHOTO_LIST[newIndex];
            modalView.innerHTML = '';

            const modalPhoto = new ModalPhoto(photoSrc);
            const image = modalPhoto.createImage();
            modalView.appendChild(image);
        }

        this.index = newIndex;
    }
    
}