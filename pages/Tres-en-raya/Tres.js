import "./Tres.css"

const template = () =>`
    <div id="containerTres">
        <div id="cabecera">
            <h2>Tres en raya</h2>
        </div>
        <div class="tablero">
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
            <div class="casilla"></div>
        </div>
    </div>
`
const casillasLista = document.querySelectorAll(".tablero .casillas")
let turno = true
const movimientosArray = new Array(9).fill(null)


casillasLista.forEach((box, index) => {
    box.textContent = index
    box.addEventListener("click", () => {
        if(turno){
            box.classList.add('marcaX')
        }else{
            box.classList.add('marcaO')
        }
        movimientosArray[index] = turno
        if (movimientosArray[0] == movimientosArray[1] &&
            movimientosArray[1] == movimientosArray[2] &&
            movimientosArray[0] != null) {
                alert("ganaste"+turno)
            }
        turno = !turno
    },{once: true} )
})


export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
}