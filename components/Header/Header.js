import { initContent } from "../../utils/route"
import "./Header.css"
const template = () =>`
    <img src="https://res.cloudinary.com/dy5ayp3le/image/upload/v1683979706/Pokeball-PNG-Photo-Image_znilvh.png" id="logoPokemon" alt="logo pokemon">
    <nav>
        <h3 id="buttonHome">HOME</h3>
        <h3 id="buttonLogout">LOGOUT</h3>
    </nav>
    <div id="contentThem">
        <input type="checkbox" id="changeColor" class="checkStyle">
    </div>    
`
const addListeners = () => {

    const darkbutton = document.querySelector("#changeColor")
    darkbutton.addEventListener("click", ()=>{
        let main_body = document.body
        main_body.classList.toggle("darkMode")
    })

    const buttonHome = document.querySelector("#buttonHome")
    buttonHome.addEventListener("click", () =>{
        initContent("Dashboard")
    })

    const buttonLogout =document.querySelector("#buttonLogout")
    buttonLogout.addEventListener("click", (e) => {
        localStorage.removeItem("user")
        initContent("Login")
        document.querySelector("nav").style.display = "none"
    })
}

export const Header = () => {
    document.querySelector("header").innerHTML = template()
    addListeners()
}

