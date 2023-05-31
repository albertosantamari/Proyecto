import "./Pokeapi.css";
import { getPokemonData } from '../../utils/dataPokemo';

let dataServicePokemon

const template = () =>`
    <div id="pokemon">
        <div id="containerButtons">
            <div id="buttonsType"></div>
            <input type="text" id="inputBuscador" placeholder="Buscador"/>
        </div>
        <div class="galleryPokemon"></div>
    </div>
`
const dataService = async (data) => {
    dataServicePokemon = data
    printFigure(dataServicePokemon)
}

const printFigure = (data) => {

    document.querySelector(".galleryPokemon").innerHTML = ""
    data.map((pokemon) => {
        const classPrintTypes = `"figurePoke ${pokemon.type[0].type.name}"`
        const tempFigure = `
        <figure class=${classPrintTypes}>
            <img src=${pokemon.image} alt=${pokemon.name} class="imagePokemon">
            <h2>${pokemon.name} #${pokemon.id}</h2>
            <h3>Type: ${pokemon.type[0].type.name}</h3>
            <h3>Height: ${pokemon.height}</h3>
            <h3>Weight: ${pokemon.weight}</h3>
        </figure>
        
        `
        document.querySelector(".galleryPokemon").innerHTML += tempFigure
    })
}

const addListener = () => {
    const inputBuscador = document.querySelector("#inputBuscador")
    inputBuscador.addEventListener("input", (a) =>{
        filterPokemon(a.target.value)
    })
    const typeBuscador = document.querySelectorAll(".pokemonType")
    console.log(typeBuscador)
    Array.from(typeBuscador).map(element => {
        element.addEventListener("click", (e) =>{
            typePokemon(e.target.id)
        })
    }) 
}

const filterPokemon = (filtername) =>{
    const filterNamePokemon = dataServicePokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filtername.toLowerCase())
    )
    printFigure(filterNamePokemon)
}

const typePokemon = (filterType) => {
     const filterTypePokemon = dataServicePokemon.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filterType.toLowerCase())
    )
    printFigure(filterTypePokemon)
}

const printButtons = (types) => {
    
    types.forEach ((type) => {
        console.log(type)
        const idButtons = `${type[0].toUpperCase() + type.slice(1)}`
        const typeButton = `<button class="pokemonType ${type}" id="${type}">${idButtons}</button>`
        const buttonsType = document.querySelector("#buttonsType")
        buttonsType.innerHTML += typeButton
    });
}

export const Pokeapi = async() => {
    document.querySelector("main").innerHTML = "loading..."
    const PokeapiData = await getPokemonData()
    const {type, dataPokemon} = PokeapiData
    document.querySelector("main").innerHTML = template()
    dataService(dataPokemon)
    printButtons(type)
    addListener()
    console.log(PokeapiData)
}


