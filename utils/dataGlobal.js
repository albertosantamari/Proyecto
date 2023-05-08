import { dataPokemon } from "./dataPokemo"

export const dataApp = async () =>{
    const getDataPokemon = await dataPokemon()
    return{
        PokeapiData: await getDataPokemon,
    } 
}