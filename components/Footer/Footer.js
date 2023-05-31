import "./Footer.css"

const template = () => `
    <h3>Copyright - 2023 - Alberto Santamaria </h3>
`

export const Footer = () =>{
    document.querySelector("footer").innerHTML = template()
}