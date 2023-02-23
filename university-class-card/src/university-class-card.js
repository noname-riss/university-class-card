import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/moar-sarcasm/moar-sarcasm.js";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/PSU-mark-navy.jpg', import.meta.url).href;

export class UniversityClassCard extends LitElement {
  static get properties () {


    return{
      header: { type: String },
    university: {type: String},
    class: {type: String},
    bottomImageText: {type: String},
    topImageText: {type: String},
    alternateColor: {type: Boolean,
    reflect: true,
    attribute: "alternate-color"},
    opened: {type: Boolean, reflect: true}
    }

  }

  toggleEvent(e){
    const state=this.shadowRoot.querySelector('class_decription').getAttribute('open')==='' ? true : false;
    this.opened=state;
  }


updated(changedProperties){
  changedProperties.forEach(oldValue,propName => {
    if(propName==="opened"){
      this.dispatchEvent(new CustomEvent('opened-changed',{
        composed: true,
        bubbles: true,
        cancelable: true,
        detail:{
          value: this[propName]
        }
      }))
    }
  });
}

  static get styles() {return css`

:host([alternate-color]) .card{
  background-color: var(--university-class-card-alternate-background-color,white);
}

     .card{
    border: 5px solid black;
    background-color: blue;
    display: flex;
    margin: 82px auto 32px;
    padding: 0 16px;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
  }
.image{
  visibility: visible;
  width: 400px;
}

  .buttonHolder{
    text-transform: uppercase;
    padding: 8px;
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  .card:hover{
  background-color:grey;
}


  `;}

  constructor() {
    super();
    this.header = 'My app';
    this.university='Penn State';
    this.class='IST 256';
    this.bottomImageText='Penn State';
    this.topImageText='We Are';
    this.alternateColor=false;
    this.opened=false;
  }

  render() {
    return html`

<div class="card">
  <h1>${this.university}</h1>
<meme-maker alt="Univeristy logo" image-url=${logo} top-text=${this.topImageText} bottom-text=${this.bottomImageText}>
</meme-maker>
<h2>${this.class}</h2>
<details class="class_decription" .open=${this.opened} @toggle=${this.toggleEvent} ></details>
  <slot></slot>
</details>

</div>


    `;
  }
}

customElements.define('university-class-card', UniversityClassCard);
