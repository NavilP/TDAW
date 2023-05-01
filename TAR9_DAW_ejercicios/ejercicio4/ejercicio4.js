function abrirRegalo(event){
    const image = event.currentTarget;
    image.src = '../regaloImg/giphy.gif';
    image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);