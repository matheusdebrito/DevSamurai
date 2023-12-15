let set1 = [1,2,3,4,5]
let set2 = [6,7,8,9,10]
let set3 = [11,12,13,14,15]

console.log(set1 + set2) // retorna uma string ao invés de um array

set1.concat(set2) // concatena os arrays criando um único array com todos os elementos de ambos

//exemplos

let set4 = set1.concat(set2).concat(set3) //juntas os valores e atribui a uma nova variável
console.log(set4)

console.log(set1.concat(set2).concat(set3))