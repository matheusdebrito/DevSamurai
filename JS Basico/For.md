for in é utilizado para retornar dados de propriedades de objetos



```js

const nomes = ["Felipe", "Maria", "Paulo", "Marcelo"]

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

for (const nome of nomes) {
    console.log(nome)
}

const person = {
    name: "Felipe",
    age: 40
}

for (const prop in person) {
    console.log(`Prop:${prop}  - ${person[prop]}`)
}



```