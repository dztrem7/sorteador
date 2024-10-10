const h2 = document.querySelector("h2")
const button = document.querySelector("button")


function sorteador() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1
   h2.textContent = numeroAleatorio
}

