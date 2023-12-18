// MANIPULANDO ESTILOS
const titulo = document.querySelector("#titulo")

const botao = document.querySelector("#botao")
botao.addEventListener("click", () => {
    titulo.style = "color: red; font-size: 10px;"
}) // ao clicar no botão muda a cor do texto do elemento titulo para vermelho e o tamanho da font para 10px

//----------------------------

// MANIPULANDO CLASSES

const titulo2 = document.querySelector("#titulo2")

const botao2 = document.querySelector("#botao2")
botao2.addEventListener("click", () => {
    if (titulo2.classList.contains("principal")) { // o método contains verifica se o elemento possui uma classe retorna sempre true ou false
        titulo2.classList.remove("principal") // o método remove remove uma classe
    } else {
        titulo2.classList.add("principal") // o método add adiciona uma classe
    }
})

// outra maneira de adicionar ou remover uma classe é com o método toggle que verifica se um elemento possui a classe e se possuir, ele remove e se não possuir, ele adiciona.

botao2.addEventListener("click", () => {
    titulo2.toggle("principal")
}) // se o  elemento titulo2 possuir a classe "principal", ele remove e se não possuir, ele adiciona