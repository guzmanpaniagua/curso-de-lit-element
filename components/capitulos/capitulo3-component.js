// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Capitulo3Component extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean }
    };
  }
  createRenderRoot() {
    return this;
  }
  render(){
     if (!this.active) {
      return html``;
    }
    return html`
          <h3>Capitulo 3</h3>


    `;
  }
}
// Register the new element with the browser.
customElements.define('capitulo3-component', Capitulo3Component);
