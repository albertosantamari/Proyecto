import {axiosUtil} from "../utils/axios"

export const getPokemon = async (id) => {
    const llamadaPokemon = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
    }
    return await axiosUtil(llamadaPokemon)
}

