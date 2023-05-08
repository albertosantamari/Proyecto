import {initContent} from "../../utils/route"
import "./Dashboard.css";

const template = () => `
    <div id = "containerDashboard">
        <ul>
            <li>
                <figure id="figurePokemon" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683294858/10-curiosidades-de-Pokemon-que-quiza-no-conoces_opsbtg.webp" alt="boton pokeapi" id="imgPokemon">
                    <h3>POKEAPI</h3>
                </figure>
            </li>
            <li>
                <figure id="figureQuiz" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683294888/istockphoto-1268465415-612x612_pfxzli.jpg" alt="boton quiz" id="imgQuiz">
                    <h3>QUIZ</h3>
                </figure>
            </li>
            <li>
                <figure id="figureTopos" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683396349/game-944386_640_x86xzs.webp" alt="boton topos" id="imgTres">
                    <h3>TRES EN RAYA</h3>
                </figure>
            </li>
        </ul>
    </div>
`

const addListeners = () => {
    const imgPokemon = document.querySelector("#imgPokemon")
    imgPokemon.addEventListener("click", () =>{
        initContent("Pokeapi")
    })

    const imgQuiz = document.querySelector("#imgQuiz")
    imgQuiz.addEventListener("click", () =>{
        initContent("Quiz")
    })

    const imgTopos = document.querySelector("#imgTres")
    imgTopos.addEventListener("click", () =>{
        initContent("Tres")
    })
}

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
    addListeners()
}