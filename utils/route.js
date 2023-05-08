import { printTemplate as Dashboard} from '../pages/Dashboard/Dashboard';
import { printTemplate as Login} from '../pages/Login/Login';
import { printTemplate as Pokeapi} from '../pages/Pokeapi/Pokeapi';
import { printTemplate as Quiz} from '../pages/Quiz/Quiz';
import { printTemplate as Tres} from '../pages/Tres-en-raya/tresEnRaya';
import { dataApp } from './dataGlobal';

export const initContent = async (route) => {
    const {PokeapiData} = await dataApp()
    switch (route) {

        case undefined:
            localStorage.getItem("user") ? Dashboard() : Login()
            break;

        case "Tres":
            Tres();
            break;
             
        case "Pokeapi":
            Pokeapi(PokeapiData);
            break;

        case "Quiz":
            Quiz();
            break

        case "Dashboard":
            Dashboard();
            break;

        case "Login":
            Login();
            break;

    }
};