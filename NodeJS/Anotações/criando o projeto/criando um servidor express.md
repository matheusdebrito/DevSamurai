`const express = require("express")` - Inicia o express
`const server = express()` - invoca o Express
`server.listen(3000)` - Define que o servidor está escutando na porta 3000

```js

server.get("/hello", (req, res) => {
    return res.json({
        title: "Hello World",
        message: "Olá meu amigo"
    });
})
```
Usa o método Get que recebe duas variáveis req e res. Atribuimos um valor para a variável res e retornamos ela quando alguém der um get na /hello.



