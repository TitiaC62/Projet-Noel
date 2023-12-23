const adventNumber = document.querySelectorAll(".advent__number")

adventNumber.forEach((number) => {
    const num = parseInt(number.textContent);
    
    if (num % 2 === 0) {
        number.style.backgroundColor = "red";
    } else {
        number.style.backgroundColor = "green";
    }

    adventNumber.forEach((number) => {
        number.addEventListener("mouseover", () =>{
            const num = parseInt(number.textContent)
            if( num % 2 == 1) {
            number.style.backgroundColor = "red"
            }
            else{
            number.style.backgroundColor = "green"
            }
        
            })

    })

})


const boxes = document.querySelectorAll(".js-box")
const today = new Date(Date.now())
const dateNumber = today.getDate()

boxes.forEach (box => {
    box.addEventListener('click', () => {
        const boxNumber = parseInt(box.textContent)
        
        if (boxNumber <= dateNumber){
            box.style.backgroundColor = "blue"
           playSong()
           // showImage(box)
            openModal(boxNumber)

            timeoutId = setTimeout(() => {
                stopSong()
            }, 2500)
        }
        
    })
})

 const url = "./assets/mp3/music.mp3"
 const song = new Audio(url)

const playSong = () => {
    song.pause()
    song.currentTime = 0
    song.play()   
}

const stopSong = () => {
    song.pause()
    song.currentTime = 0
    clearTimeout(timeoutId) // Effacer le délai si la musique est arrêtée avant la fin du délai
}

const modal = document.querySelector(".js-modal")

const openModal = (index) => {
    modal.style.display = 'block'
    modal.showModal()
}

const closeModal = document.querySelector('.modal__button')

closeModal.addEventListener('click', () =>{
    modal.style.display = 'none'
    stopSong()

})