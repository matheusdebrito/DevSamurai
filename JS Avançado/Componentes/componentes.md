componentes geralmente são armazenados na pasta src/components

os componentes são criado através do código:
    class CardNews extends HTMLElement {
        constructor(){
            super();

            const shadow = this.attachShadow({mode: "open"})
            shadow.innerHTML = "<h1>Hello World</h1>"
        }
    }

    customElements.define('card-news', CardNews)

o método componente é o primeiro método a ser executado.

o método "super()" faz com que o componente use o método constructor do componente pai.

attachShadow pode receber mode: "open"/"close" => open significa que pode receber alterações de outro código javascript e close significa que não pode receber alterações.

os componentes precisam ter - no nome para diferenciar dos elementos do HTML 

para usar o componente linkamos o arquivo no head do arquivo html => <script src="src/components/CardNews.js" defer></script>

o parâmetro defer significa que o componente somente sera implementado depois do DOM carregar.

Os estilos aplicados dentro de um componente somente agem no escopo do componente.

----------------------------> PROPS <-------------------------------

Podemos definiar que um conteudo do componente seja alterado:
    const componenteRoot = document.createElement('h1')
    componenteRoot.textContent = this.getAttribute("titulo")
Cria o elemento h1 e define que o textContent dele sera passado pela propriedade titulo no HTML. Ex: <titulo-dinamico titulo="Titulo">