```javascript

const express = require("express");
const server = express();

server.use(express.json());

let customers = [
    {id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
    {id: 2, name: "Google", site: "http://google.com"},
    {id: 3, name: "UOL", site: "http://uol.com.br"}
]

server.post("/customers", (req, res) => {
    const {name, site} = req.body
    const nextId = customers[customers.length - 1].id + 1

    const newCustomer = {nextId, name, site}

    customers.push(newCustomer)

    return res.status(201).json(newCustomer)
})




server.listen(3000);


```