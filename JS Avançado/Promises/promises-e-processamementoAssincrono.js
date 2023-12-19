/**
 * Promise é um objeto usado para processamento assíncrono. Uma promise representa um valor que pode estar disponível agora, no futuro ou nunca.
 * Uma promise está em um desses estados:
 * pending (pendente) - Estado inicial, que não foi realizado nem rejeitado.
 * fulfilled  (realizada) - sucesso na operação
 * rejected (rejeitada) - falha na operação
 */


let count = 0
let testPromise = () => {
    const promiseCount = ++count
    console.log("sync started")

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promiseCount % 2 == 0) {
                resolve(promiseCount)
            } else{
                reject(promiseCount)
            }
            console.log("async timer")
        }, 3000)

    }).then((value) => {
        console.log(value)
    }).catch(() => {
        console.error(value)
    })

    console.log("sync finished")
}

const botao = document.querySelector("#botao")
botao.addEventListener("click", testPromise)