function abrirRegalo(){
    const image = document.querySelector('img');
    image.src = '../regaloImg/giphy.gif';
    image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);