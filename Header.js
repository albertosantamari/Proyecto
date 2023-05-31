import { changeColor } from "../../utils/changeColor"
import { initContent } from "../../utils/route"
import "./Header.css"
const template = () =>`
<img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683979706/Pokeball-PNG-Photo-Image_znilvh.png" id="logoPokemon" alt="logo pokemon">
    <nav>
        <h3 id="buttonHome">HOME</h3>
        <h3 id="buttonLogout">LOGOUT</h3>
    </nav>
        <div id="contentThem">
            <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683213268/eclipse_xdxd3w.png" alt="boton tema" id="buttonThem">
        </div>    
`
const addListeners = () => {
    const buttonChangeColor = document.querySelector("#buttonThem")
    buttonChangeColor.addEventListener("click", () =>{
        const color = changeColor()
        document.body.style.background = color
    })

    const buttonHome = document.querySelector("#buttonHome")
    buttonHome.addEventListener("click", () =>{
        initContent("Dashboard")
    })

    const buttonLogout =document.querySelector("#buttonLogout")
    buttonLogout.addEventListener("click", (e) => {
        localStorage.removeItem("user")
        initContent("Login")
        if (!localStorage.getItem("user"))
        document.querySelector("nav").style.display = "none"
    })
}

export const printTemplate = () => {
    document.querySelector("header").innerHTML = template()
    addListeners()
}

