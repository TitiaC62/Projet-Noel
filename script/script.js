document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');

    if (data) {
    let prenom = "Bonjour " + decodeURIComponent(data);
        let prenomElement = document.getElementById('prenom');
        prenomElement.textContent = prenom;
    } else {
        let userInput = prompt("Entrez votre prénom :");

        if (userInput !== null) {
            window.location.href = "accueil.html?data=" + encodeURIComponent(userInput);
        }
    }
});

