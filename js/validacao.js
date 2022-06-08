export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (validadores[tipoDeInput]) {
        validadores[tipoDeinput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML=''
    }else{
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML=''
    }
}

const mensagensDeErro = {
    nome:{
        valueMissing:'O campo nome não pode estar vazio.'
    },
    email:{
        valueMissing: 'O Campo de email não pode estar vazio.',
        typeMismatch: 'o email digitado não é válido.'
    },
    senha:{
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter deve conter ao menos uma letra maiúscula, um numero e não deve conter símbolos'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ""

    if(!maiorQue18(dataRecebida)){
        mensagem = "Você precisa ter mais que 18 anos"
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCfullYear()+18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}