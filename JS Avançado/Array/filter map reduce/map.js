const numbers = [1, 2, 3, 4, 5]

const dobro = numbers.map((n) => n * 2) // multiplica todos os itens por dois

console.log(dobro)

// converter graus fahrenheit para celcius com map

const f = [0, 32, 45, 46, ,47, 91, 93, 121]
const c = f.map((t) => Math.round(((t - 32) * 5) / 9))

console.log(c)

