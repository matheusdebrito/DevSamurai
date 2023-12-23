
// consome API com ajax

let dados2 = ""

const recuperaDados = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.github.com/users/matheusdebrito")
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            const res = JSON.parse(xhr.responseText)

            const name = res.name
            const avatarUrl = res.avatar_url
            const followers = res.followers
            const blogUrl = res.blog

            console.log({ name, avatarUrl, followers, blogUrl})
            // console.log(res)
            dados = res.name
        }
    }
}

// Fim API com Ajax

// consome API com fetch
const dadosF = () => {
    fetch("https://api.github.com/users/matheusdebrito")
    .then((response) => response.json())
    .then((dados) => console.log(dados))
    .catch((error) => console.log(error))
}

// Fim API com Fecth

const botao = document.querySelector("#botao")
botao.addEventListener("click", dadosF)

let testaDados = () => {
    console.log(`dados =${dados2}`)
}

const botao2 = document.getElementById("ads")
botao2.addEventListener("click", testaDados)


