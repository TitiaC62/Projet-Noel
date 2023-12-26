
//texte qui défile
const container = document.getElementById('txt-welcom')

const text = 'Bienvenu dans la maison du Père Noël'
const limit = text.length
const interval = 50
let index = 0

const idInterval = setInterval(function(){
    if(index <= limit){
        container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)

//Book : renvoi vers la video de l'histoire de Noël
 const book = document.querySelector(".book")

 document.querySelector('.video_click').addEventListener('click', function() {
    document.querySelector('.video').style.display = 'block';
  });

  const modal = document.querySelector(".js-modal")
  const closeModal = document.querySelector('.modal__button')

closeModal.addEventListener('click', () =>{
    modal.style.display = 'none'

})

//Décompte
function updateCountdown() {
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // 25 décembre
    if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    }

    const timeDiff = christmasDate.getTime() - currentDate.getTime();

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (days === 0) {
            const countdownElement = document.getElementById('countdown');
            countdownElement.innerHTML = "C'est le grand jour !"
            const meryChristmasElement = document.getElementById('merryChristmas');
            meryChristmasElement.innerHTML = "Joyeux Noël !";
            return;
        }
    }
    

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `Plus que ${days}J ${hours}H ${minutes}Min  avant Noël !`;
}


updateCountdown();
setInterval(updateCountdown, 1000);


//Son Pere Noel

const url = "./assets/mp3/pere_noel.mp3"
const song = new Audio(url)

const playSong = () => {
   song.pause()
   song.currentTime = 0
   song.play()   
}

const santa = document.querySelector('.santa')
    santa.addEventListener('mouseover', () => {
           playSong()
           timeoutId = setTimeout(() => {
                stopSong()
            }, 2500)
        })
