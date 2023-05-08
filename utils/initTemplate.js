import { printTemplate as Header } from "../components/Header/Header";
import { printTemplate as Footer } from "../components/Footer/Footer";
import { printTemplate as Dashboard} from "../pages/Dashboard/Dashboard";

export const initTemplate = () => {
    const app = document.querySelector("#app")
    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")

app.append(header, main, footer)
Header()
Footer()
Dashboard()
}
