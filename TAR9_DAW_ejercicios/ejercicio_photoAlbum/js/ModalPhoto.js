class ModalPhoto {
    /*Clase para la imagen mas grande*/
    constructor(src){
        this.src = src;
        
    }
    createImage(){
        const image = document.createElement('img');
        image.src = this.src;
        return image;
    }
}

