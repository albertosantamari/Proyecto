import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Login } from "../pages/Login/Login";

export const initTemplate = () => {
    const app = document.querySelector("#app")
    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")

    app.append(header, main, footer)
    Header()
    localStorage.getItem("user") ? Dashboard() : Login()
    Footer()
}
