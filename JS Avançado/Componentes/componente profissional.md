os componentes são criado através do código:
    class CardNews extends HTMLElement {
        constructor(){
            super();

            const shadow = this.attachShadow({mode: "open"})
            shadow.innerHTML = "<h1>Hello World</h1>"
        }
    }

    customElements.define('card-news', CardNews)

um componente profissional separa a sua estrutura. Ex:

    class CardNews extend HTMLElement {
        constructor(){
            super()
        }

        build(){

        }

        styles(){
            
        }
    }