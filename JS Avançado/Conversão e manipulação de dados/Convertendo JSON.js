/**
 * JSON.stringfy(people) - converte o objeto para JSON
 * JSON.parse() - converse JSON para objeto
 */

const people = [
    {
        id: 1,
        name: "Felipe",
        lastName: "Fontoura",
        bornDate: new Date(1982, 1, 18),
        address: {
            city: "São José dos Campos",
        },
    },

    {
        id: 2,
        name: "Eduardo",
        lastName: "Moraes",
        bornDate: new Date(2001, 3, 5),
        address: {
            city: "Recife",
        },
    }
]

console.log(people);