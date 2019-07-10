// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './card-component.js';
// Extend the LitElement base class
class ListCardsComponent extends LitElement {


  createRenderRoot() {
    return this;
  }
  render(){

    return html`
      <div class="row text-center">

        <div class="col-lg-3 col-md-6 mb-4">
         <card-component></card-component>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <card-component></card-component>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <card-component></card-component>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <card-component></card-component>
        </div>

      </div>
      <!-- /.row -->

    `;
  }
}
// Register the new element with the browser.
customElements.define('list-cards-component', ListCardsComponent);
