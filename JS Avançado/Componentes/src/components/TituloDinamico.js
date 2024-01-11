class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})

        //base do componente
        const componenteRoot = document.createElement('h1')
        componenteRoot.textContent = this.getAttribute("titulo")

        //estilizar o componente
        const style = document.createElement('style')
        style.textContent = `
            h1{
                color: red;
            }
        `

        //enviar para a shadow
        shadow.appendChild(componenteRoot)
        shadow.appendChild(style)
    }
}

customElements.define("titulo-dinamico", TituloDinamico)