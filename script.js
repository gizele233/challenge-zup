const img1 = document.getElementById("img-1");
const title1 = document.getElementById("title-1");
const img2 = document.getElementById("img-2");
const title2 = document.getElementById("title-2");
const img3 = document.getElementById("img-3");
const title3 = document.getElementById("title-3");
const img4 = document.getElementById("img-4");
const title4 = document.getElementById("title-4");

const anof = document.getElementById("footer-ano");

const numeroMaximoDePersonagens = 671;

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = (img, title) => {
    const id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        img.src = data.image;
        title.innerHTML = data.name;
        // img.innerHTML = data.image;
        // nomeDoPersonagem = data.name;
    })
}

footer = () => {
    var data = new Date();
    var ano = data.getFullYear(); 
    anof.innerHTML = ano;
}

start = () => {
    getCharacter(img1, title1);
    getCharacter(img2, title2);
    getCharacter(img3, title3);
    getCharacter(img4, title4);
    footer();
}

window.onload = start;
