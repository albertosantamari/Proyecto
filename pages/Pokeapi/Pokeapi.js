import { dataPokemon } from "../../utils/dataPokemo";
import "./Pokeapi.css";
let dataServicePokemon
const template = () => `
    <div id="pokemon">
        <input type="text" id="inputBuscador"/>
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
            <h2>${pokemon.name}</h2>
            <h3>id: ${pokemon.id}</h3>
            <h3>${pokemon.height}</h3>
            <h3>${pokemon.weight}</h3>
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
}

const filterPokemon = (filtername) =>{
    const filterNamePokemon = dataServicePokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filtername.toLowerCase())
    )
    printFigure(filterNamePokemon)
}

export const printTemplate = (data) => {
    document.querySelector("main").innerHTML = template()
    dataService(data)
    addListener()
}