/**
 * 
 */

const values = [1,2,3,4,5,6,10]

let soma = (n) => n + n
let subtrai = (n) => n - n
let divide = (n) => n / n
let multiplica = (n) => n * n


let calcular = (values, operacao) => {
    for (let i = 0; i < values.length; i++){
        // values[i] *= values[i]
        values[i] = operacao(values[i])
    }

    return values
}

console.log(calcular(values, subtrai))