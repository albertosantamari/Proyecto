import "./Footer.css"

const template = () => `
    <h2>Copyright - 2023 - Alberto Santamaria </h2>
`

export const printTemplate = () =>{
    document.querySelector("footer").innerHTML = template()
}