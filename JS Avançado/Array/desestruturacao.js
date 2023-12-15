let set = [1,2,3,4,5]

let [n1, n2] = set // n1 = 1 e n2 = 2

console.log(`n1 = ${n1}`)
console.log(`n2 = ${n2}`)

let myFunction = () => {
    const x = 10
    const y = 400
    return [x, y]
}

const [x, y] = myFunction()

console.log(`x = ${x}`)
console.log(`y = ${y}`)