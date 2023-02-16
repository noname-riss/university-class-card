import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/PSU-mark-navy.jpg', import.meta.url).href;

export class UniversityClassCard extends LitElement {
  static get properties () {
    return{ 
      header: { type: String },
    university: {type: String},
    class: {type: String}}

  }

  static get styles() {return css`
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

.newBG{
  background-color:white;
}
  `;} 

  constructor() {
    super();
    this.header = 'My app';
    this.university='Penn State';
    this.class='IST 256';

  }

  render() {
    return html`

<div class="card">
  <h1>${this.university}</h1>
<img class="image" src=${logo} alt="Univeristy logo"/>
<h2>${this.class}</h2>
<p> Here is the class website for IST 256 and Haxpsu:
<a href="https://hax.psu.edu/">

</a> </p>
  <button class="button">
    Details
</button>
</div>


    `;
  }
}

customElements.define('university-class-card', UniversityClassCard);
