import cardHTML from "./cardHTML.js";

const template = document.createElement('template');
template.innerHTML = cardHTML();

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.setText();
        this.setImage();
    }

    setImage() {
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    setText() {
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }
}

window.customElements.define('user-card', UserCard);
