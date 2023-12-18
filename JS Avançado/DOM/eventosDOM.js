// ESTRUTURA
// document.addEventListener("evento", função)
// também pode ser atribuido o addEventListener à uma variável. Ex.: x.addEventListener("evento", função)

// EVENTO DE PÁGINA CARREGADA
document.addEventListener("DOMContentLoaded", () =>{
    let titulo = document.querySelector("#titulo")
}) // espera o DOM estar totalmente carregado para pegar o elemento com id titulo e atribuir à variável titulo

// --------------------------------

// EVENTO DE CLICK

const button = document.querySelector("#botao")
button.addEventListener("click", () =>{
    console.log("clicado")
}) // ao clicar no botao exibe "clicado" no console.

const link = document.querySelectorAll(a)
link.addEventListener("click", () => {
    console.log("clicado")
}) // ao clicar nos links exibe "clicado" no console.

//------------------------------------------

// EVENTOS DE TECLAS (keydown, keyup)

const input = document.querySelector("input[type=text]")
input.addEventListener("keydown", () => {
    console.log("keydown")
})// exibe keydown no console sempre que o usuário apertar uma tecla no input

input.addEventListener("keyup", () => {
    console.log("keyup")
})// exibe keyup no console sempre que o usuário soltar uma tecla no input

input.addEventListener("keydown", (event) => {
    console.log(`event ${event.key} - ${event.keyCode}`)
})// ao apertar uma tecla do teclado exibe a tecla apertada e o código da tecla na tabela

// -------------------------

// EVENTO DE FORMULÁRIO

let formulario = document.querySelector("form")
formulario.addEventListener("submit", (event) => {
    console.log("formulario")
}) // ao clicar no botão do formulário exibe "formulario" no console.