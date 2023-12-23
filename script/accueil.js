

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

