'use strict'

function mostrarResultado (){

    //chamar todos os objetos que vou usar

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const imcForm = document.getElementById('imc-form')

    if (imcForm.reportValidity()){
        const valorIMC = (peso / altura ** 2)
        console.log(valorIMC)

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        }else if (valorIMC < 25){
            classificacao = 'com peso ideal. <span class="verde">Parabéns!</span>'
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso'
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I'
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II'
        }else {
            classificacao = 'com obesidade grau III, <span class="vermelho">cuidado!</span>'
        } 
        resultado.innerHTML = `${nome} seu IMC  é ${valorIMC.toFixed(2)} e você está ${classificacao}`
    }
   
}

const calcular = document.getElementById('calcular')
.addEventListener('click', mostrarResultado)

