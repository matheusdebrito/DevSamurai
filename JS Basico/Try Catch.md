O try catch é usado, geralmente, quando vamos fazer conexão com algum serviço externo como consulta de API, consulta de Banco de Dados, Arquivos, etc. Não é recomendo o seu uso para estruturas condicionais no código


```js

try {
    throw "erro de conexção com a API"

} catch (error) {

    console.error(error)

} finally {
    console.log("Final")
}

```