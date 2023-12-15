/**
 * callback - Função que é executada em cada elemento do array, recebe quatro argumentos:
 *  acumulator - O valor retornado na última invocação do callback, ou o argumento valor inicial, se fornecido.
 *  currentValue - O elemento atual que está sendo processado no array.
 *  indice - O índice do elemento atual que está sendo processado no array.
 *  array - O array ao qual a função reduce foi chamada.]
 *  initialValue - Opcional. Objeto Objeto a ser usado como primeiro argumento da primeira chamada da função callback
 */

let values = [1.5, 2, 4, 10]

let sum = values.reduce((total, item) => total + item, 0) // Soma todos os elementos do array iniciando o indice 0
console.log(sum)