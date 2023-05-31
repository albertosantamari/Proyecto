import { initContent } from "../../utils/route";
import "./Login.css";

const template = () => `    
    <form class="contenedor">
        <h2>LOGIN</h2>
        <label class="contenedorUser">
            <input type="text" id="userValue" placeholder="User:" required>
        </label>
        <button id="buttonLogin">ENVIAR</button>
    </form>
`;

const addListeners = () => {
  const buttonLogin = document.querySelector("#buttonLogin");
  buttonLogin.addEventListener("click", () => {
    const loginInput = document.querySelector("#userValue");
    if (loginInput.value) {
      localStorage.setItem("user", loginInput.value);
      document.querySelector("nav").style.display = "flex";
      initContent("Dashboard");
    } else {
      alert("debes introducir un nombre valido");
    }
  });
};

export const Login = () => {
  if (!localStorage.getItem("user")) {
    document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = template();
    addListeners();
  }
};
