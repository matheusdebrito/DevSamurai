let h2 = document.createElement("h2") // cria um elemento HTML h2 VAZIO
h2.innerHTML = "texto" // atribui "texo" ao elemento
document.body.append(h2) // adiciona o elemento h2 ao body.

const lista = document.createElement("ul") // cria um elemento ul
const itemLista = document.createElement("li") // cria um elemento li
itemLista.innerHTML = "Item 1" // adicona o texto "Item 1" ao elemento

lista.append(itemLista) // adiciona o elemento li ao elemento UL
document.body.append(lista) // adiciona o elemento ul ao body