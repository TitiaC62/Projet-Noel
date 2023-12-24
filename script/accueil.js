

const container = document.getElementById('txt-welcom')

const text = 'Bienvenu dans la maison du Père Noël'
const limit = text.length
const interval = 50
let index = 0


const idInterval = setInterval(function(){
    console.log(index)
    if(index <= limit){
        container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)



// Fonction pour mettre à jour le décompte
function updateCountdown() {
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // 25 décembre
    if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    }

    const timeDiff = christmasDate.getTime() - currentDate.getTime();

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (days === 1) {
            // Afficher "Joyeux Noël" lorsque le décompte est à J-1
            const countdownElement = document.getElementById('countdown');
            countdownElement.innerHTML = "Joyeux Noël !";
            return;
        }
    }
    
    // Calcul des jours, heures, minutes et secondes restants
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    

    // Affichage du décompte dans l'élément avec l'ID "countdown"
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = ` ${days} J ${hours}H ${minutes}Min ${seconds} s avant Noël !`;
}

// Mettre à jour le décompte initialement
updateCountdown();

// Mettre à jour le décompte chaque seconde
setInterval(updateCountdown, 1000);

