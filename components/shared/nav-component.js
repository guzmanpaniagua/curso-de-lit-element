// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class NavElement extends LitElement {
  createRenderRoot() {
    return this;
  }
  render(){
    return html`
        <div class="bg-dark " id="navbarHeader" style="">
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <strong>Curso de lit element</strong>
            </a>
            <button class="navbar-toggler" type="button" >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

    `;
  }
}
// Register the new element with the browser.
customElements.define('nav-component', NavElement);
