class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous");
        
        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("url");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = ""

        cardRight.appendChild(newsImage);
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            
        `

        return style
    }
}

customElements.define('card-news', CardNews)