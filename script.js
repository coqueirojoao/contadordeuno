let joaoGanha = document.querySelector('.win1')
let gabrielaGanha = document.querySelector('.win2')
let botao1 = document.getElementsByTagName('button')[0]
let botao2 = document.getElementsByTagName('button')[1]
let clicks = 0
let clicks2 = 0

botao1.addEventListener('click', vitoriaDeJoao)

function vitoriaDeJoao() {
    clicks += 1
    joaoGanha.innerText = clicks
    sessionStorage.setItem('vitoriaJoao', joaoGanha.innerText)
    sessionStorage.setItem('clicks1', JSON.stringify(clicks))
}

botao2.addEventListener('click', vitoriaDeGabriela)

function vitoriaDeGabriela() {
    clicks2 += 1
    gabrielaGanha.innerText = clicks2
    sessionStorage.setItem('vitoriaGabriela', gabrielaGanha.innerText)
    sessionStorage.setItem('clicks2', JSON.stringify(clicks2))
}


window.onload = function() {
let vitoriaJoao = sessionStorage.getItem('vitoriaJoao')
let vitoriaGabriela = sessionStorage.getItem('vitoriaGabriela')
let numeroDeCliques = JSON.parse(sessionStorage.getItem('clicks1'))
let numeroDeCliques2 = JSON.parse(sessionStorage.getItem('clicks2'))

gabrielaGanha.innerText = vitoriaGabriela
joaoGanha.innerText = vitoriaJoao
clicks = numeroDeCliques
clicks2 = numeroDeCliques2
}