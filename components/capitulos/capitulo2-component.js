// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Capitulo2Component extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean }
    };
  }
  createRenderRoot() {
    return this;
  }

  render() {
    if (!this.active) {
      return html``;
    }
    return html`

        <h3>Capitulo 2</h3>
   
        `
  }
}
// Register the new element with the browser.
customElements.define('capitulo2-component', Capitulo2Component);