import "./Topos.css"
import {randomTime} from "../../utils/Topos/randomTime"


const template = () =>`
        <div class="interface">
            <h1>Wacka Mole</h1>
            <span class="score">0</span>
            <button id="start">START</button>
        </div>
        <div class="game">
            <div class="hole holeOne">
                <div class="mole"></div>
            </div>
            <div class="hole holeTwo">
                <div class="mole"></div>
            </div>
            <div class="hole holeThree">
                <div class="mole"></div>
            </div>
            <div class="hole holeFour">
                <div class="mole"></div>
            </div>
            <div class="hole holeFive">
                <div class="mole"></div>
            </div>
            <div class="hole holeSix">
                <div class="mole"></div>
            </div>
        </div>
        <div id="modalPuntos">
            <div id="containerModal">
                <div id="modal">
                    <h3>ENHORABUENA!</h3>
                    <p class="puntos"></p>
                    <button id="close">CERRAR</button>
                </div>
                <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683970541/pikachu_gif_qnqrd9.gif" class="gifPikachu" alt="gif pikachu">
            </div>
        </div>
`

let lastHole
let score = 0
let timeUp = false

const startGame = () => {
    timeUp = false
    showMole()

    setTimeout(() =>{
        timeUp = true
        document.querySelector("#modalPuntos").style.display = "block"
        document.querySelector(".puntos").innerHTML = `score: ${score}`
    }, 15000)
}

const ramdomHole = (holesArray) => {
    const index = Math.floor(
        Math.random() * holesArray.length
    )
    const hole = holesArray[index]

    if (hole === lastHole) {
        return ramdomHole(holesArray)
    }
    lastHole = hole
    return hole
}

const showMole = () => {
    const agujeros = document.querySelectorAll(".hole")
    const time = randomTime(500, 1000)
    const hole = ramdomHole(agujeros)
    hole.classList.add("up")
    setTimeout(() => {
        hole.classList.remove("up")

        if (!timeUp) {
            showMole()
        }
    }, time)
}

const addListeners = () => {
    document.querySelectorAll(".mole").forEach((mole) => mole.addEventListener("click", (e) => wack(e)))
    document.querySelector("#start").addEventListener("click", startGame)

    const closeModal = document.querySelector("#close")
    closeModal.addEventListener("click", () => {
        document.querySelector("#modalPuntos").style.display = "none"
        score = 0
        document.querySelector(".score").innerHTML = score
    })
}


const wack = (e) => {
    score++
    e.target.parentNode.classList.remove("up")
    document.querySelector(".score").textContent = score
}

export const Topos = () => {
    document.querySelector("main").innerHTML = template()
    addListeners()
}