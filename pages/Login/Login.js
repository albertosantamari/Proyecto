import { initContent } from "../../utils/route";
import "./Login.css";

const template = () => `    
    <form class="contenedor">
        <h2>LOGIN</h2>
        <div class="contenedorUser">
            <input type="text" name="user" class="nameUser"  placeholder="User:" required>
        </div>
        <input type="submit" class="buttonLogin" value="Enviar">
    </form>
`

const addListeners = () => {
    const buttonLogin = document.querySelector(".buttonLogin")
    buttonLogin.addEventListener("click", () =>{
        const button = document.querySelector(".buttonLogin")
        localStorage.setItem("user", button.value)
        if (localStorage.getItem("user"))
        document.querySelector("nav").style.display = "block"
        initContent()
    })

}

export const printTemplate = () => {
    if (!localStorage.getItem("user"))
        document.querySelector("nav").style.display = "none"
    document.querySelector("main").innerHTML = template()
    addListeners()
}