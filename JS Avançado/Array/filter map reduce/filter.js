// O método filter filtra alguns elementos do array e atribui eles a um novo array.
const numbers = [10, 18, 1, 15]

let x = numbers.filter((n) => n >= 10) // filtra os itens do array que são maiores ou igua a 10 e atribui a variavel x. OBS: por só ter uma linha pode ser dispensado o uso do return() e das {}

console.log(x)


const people = [
    {name: "felipe", age: 40},
    {name: "marcos", age: 16},
    {name: "antonio", age: 52},
]

let maior = people.filter((p) =>{return(p.age >= 18)}) // varre o array de objetos e retorna os objetos que age é maior ou igual 18

console.log(maior)