import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Login } from '../pages/Login/Login';
import { Pokeapi } from '../pages/Pokeapi/Pokeapi';
import { printTemplate as Quiz} from '../pages/Quiz/Quiz';
import { Topos } from '../pages/Topos/Topos';
import { printTemplate as Tres} from '../pages/Tres-en-raya/Tres';


export const initContent = (route) => {
    
    switch (route) {

        case "Tres":
            Tres();
            break;
             
        case "Pokeapi":
            Pokeapi();
            break;

        case "Quiz":
            Quiz();
            break

        case "Topos":
            Topos();
            break

        case "Dashboard":
            Dashboard();
            break;

        case "Login":
            Login();
            break;

    }
};