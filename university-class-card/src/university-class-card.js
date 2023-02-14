import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class UniversityClassCard extends LitElement {
  static properties = {
    header: { type: String },
    university: {type: String},
    logo: {type: String},
    class: {type: String}
  }

  static styles = css`
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
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`

<div class="card">
  <h1>${this.university}</h1>
<img class="image" src="https://www.psu.edu/PSU-mark-navy.jpg" alt="Univeristy logo"/>
<h1>Penn State Hax</h1>
<p> Here is the class website for IST 256 and Haxpsu:
<a href="https://hax.psu.edu/">

</a> </p>
  <button class="button">
    Details
</button>
</div>



<div class="buttonHolder">
    <button class="add"> Add Frame </button>

  <button class="chageBG">Change Background</button>

   <button class="chageti">Change Title</button>

  <button class="delete">Delete last card</button>
</div>



    `;
  }
}

customElements.define('university-class-card', UniversityClassCard);
