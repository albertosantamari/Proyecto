import { getPokemon } from "../services/pokemon.service"
import { typePokemon } from "./typesPokemon"

export const getPokemonData = async () => {
    const data = []
    for(let i = 1; i < 151; i++){
        data.push(await getPokemon(i))
    }
    return dataMap(data)
}

const dataMap = (data) => {
    
    const filterData = data.map((pokemon) =>({
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        id: pokemon.id,
        type: pokemon.types,
        height: pokemon.height,
        weight: pokemon.weight,
    }))

    const type = typePokemon(filterData)
    return {
        type: type,
        dataPokemon: filterData,
    }
}