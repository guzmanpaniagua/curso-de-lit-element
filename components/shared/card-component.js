// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class CardElement extends LitElement {
  createRenderRoot() {
    return this;
  }
  render(){
    return html`

       <div class="card">
            <img class="card-img-top" src="https://raw.githubusercontent.com/guzmanpaniagua/basic-example-lit-element-with-bootstrap/master/500-325.jpg" alt="">
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>

    `;
  }
}
// Register the new element with the browser.
customElements.define('card-component', CardElement);