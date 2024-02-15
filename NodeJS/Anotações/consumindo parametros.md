http:localhost:3000/hello?nome=Felipe&idade=24
Query params = ?nome=Felipe&idade=24

```javascript

server.get("/hello", (req, res) => {
    const {nome, idade} = req.query;

    return res.json({
        title: "Hello World",
        message: `Olá ${nome}`,
        idade: `${idade}`
    });
})
```


http:localhost:3000/hello/felipe
Route params = /hello/:nome


```javascript

server.get("/hello/:nome", (req, res) => {
    const {nome} = req.params;


    return res.json({
        title: "Hello World",
        message: `Olá ${nome}`
    })
})

```