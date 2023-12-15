let people = ["matheus", "felipe", "joao", "maria", "natalia"]

// Retorna um elemento do array
console.log(people[2]);

// Retorna "fatias" de um array
console.log(people.slice(2)) // retorna a partir do indice 2
console.log(people.slice(1, 3)) // retorna a partir do indice 1 até o 3

// Adiciona novos elementos no array (início e fim)

people.push("ana") // adiciona "ana" ao final do array

people.unshift("marcos") // adiciona "marcos" no início do array

// Remove elementos do array

people.pop() // remove elementos do array

people.shift() // remove elementos do início do array

people.splice(x, y) // remove os elementos do array iniciando em x e terminando em y

people.indexOf("matheus") // localiza o indice de um elemento no array