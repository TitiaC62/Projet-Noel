document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');

    if (data) {
        let prenom = "Bienvenue " + decodeURIComponent(data);
        let prenomElement = document.getElementById('prenom');
        prenomElement.textContent = prenom;
    } else {
        let userInput = prompt("Entrez votre prénom :");

        if (userInput !== null) {
            window.location.href = "accueil.html?data=" + encodeURIComponent(userInput);
        }
    }
});


const container = document.getElementById('txt-welcom')

const text = 'Bienvenu Dans la maison du Père Noël'
const limit = text.length
const interval = 200
let index = 0


const idInterval = setInterval(function(){
    console.log(index)
    if(index <= limit){
        container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)