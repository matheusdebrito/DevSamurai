var ghPromise = function() {
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.github.com/users/matheusdebrito");
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject("Erro na função");
                }
            }
        }

    })
}

ghPromise()
.then(function(resposta){
    console.log(resposta);
})
.catch(function(erro){
    console.warn(erro);
})



