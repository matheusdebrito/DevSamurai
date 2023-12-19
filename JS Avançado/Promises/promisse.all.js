let count = 0
let testPromise = () => {
    const promiseCount = ++count
    console.log("sync started")

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p1 finished")
            resolve(1)
    }, 1000)})

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p2 finished")
            resolve(2)
    }, 2000)})

    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p3 finished")
            resolve(3)
    }, 3000)})

    Promise.all([p1, p2, p3]).then((values) => {
        console.log('promises values', values)
    }).catch(() => {
        console.error("promises erro")
    })

    console.log("sync finished")}

const botao = document.querySelector("#botao")
botao.addEventListener("click", testPromise)