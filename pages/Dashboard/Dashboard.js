import { initContent } from "../../utils/route";
import "./Dashboard.css";
const userName = localStorage.getItem("user");
const template = () => `
    <div id = "containerDashboard">
        <h2>Bienvenido, ${userName} estas preparado?</h2>
        <ul>
            <li>
                <figure id="figurePokemon" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1684940371/pngaaa.com-259212_h83wwe.png" alt="boton pokeapi" id="imgPokemon">
                    <h3>POKEAPI</h3>
                </figure>
            </li>
            <li>
                <figure id="figureQuiz" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1684940629/pngwing.com_kcgaih.png" alt="boton quiz" id="imgQuiz">
                    <h3>QUIZ</h3>
                </figure>
            </li>
            <li>
                <figure id="figureTres" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683396349/game-944386_640_x86xzs.webp" alt="boton topos" id="imgTres">
                    <h3>TRES EN RAYA</h3>
                </figure>
            </li>
            <li>
                <figure id="figureTopos" class="figurenDashboard">
                    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683979698/pngw1_npde2l.png" alt="boton pokeapi" id="imgTopo">
                    <h3>TOPOS</h3>
                </figure>
            </li>
        </ul>
    </div>
`;

const addListeners = () => {
  const imgPokemon = document.querySelector("#imgPokemon");
  imgPokemon.addEventListener("click", () => {
    initContent("Pokeapi");
  });

  const imgQuiz = document.querySelector("#imgQuiz");
  imgQuiz.addEventListener("click", () => {
    initContent("Quiz");
  });

  const imgTres = document.querySelector("#imgTres");
  imgTres.addEventListener("click", () => {
    initContent("Tres");
  });

  const imgTopos = document.querySelector("#imgTopo");
  imgTopos.addEventListener("click", () => {
    initContent("Topos");
  });
};

export const Dashboard = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
