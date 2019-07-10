// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class extraContent1Component extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean }
    };
  }
  _createRoot() {
    return this;
  }

  render() {
    if (!this.active) {
      return html``;
    }
    return html`

        <h3>Extra content 1</h3>
  
        `
  }
}
// Register the new element with the browser.
customElements.define('extra-content1', extraContent1Component);