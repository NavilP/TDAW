class Miniatura {
    /*Clase para las miniaturas*/
    constructor(src){
        this.src = src;
        this.createImage();
    }
    createImage(){
        const image = document.createElement('img');
        image.src = this.src;
        return image;
    }
}

