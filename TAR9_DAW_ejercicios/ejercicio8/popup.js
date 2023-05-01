window.onload = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
        const tabId = activeTab[0].id;
        mostrarGato();
    });
};
const mostrarGato = () => {
    document.getElementById(
        "cat_image"
    ).src = 'https://m.media-amazon.com/images/I/412w7F7PplL._SX331_BO1,204,203,200_.jpg';
};
