import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventList('blur', (evento) => {
        valida(evento.target)
    })
})