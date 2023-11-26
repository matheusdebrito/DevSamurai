/*
Todas as funções possuem o objeto arguments.
O objeto arguments pode ser utilizado para quando temos uma função que pode receber uma quantidade X de argumentos.

Para verificar a estrutura do objeto arguments podemos criar uma função que retorna console.log(arguments).
*/

// Exemplo de como retornar o objeto arguments para verificar a estrutura do mesmo.
function retornaArguments() {
    console.log(arguments)
};

retornaArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Fim do Exemplo

function soma(){
    let res = 0

    for (const n of arguments) {
        res += n
    }

    return res
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))