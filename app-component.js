// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';


import './components/shared/nav-component.js'
import './components/shared/sidebar-component.js'
import './router-pwa.js'
// Extend the LitElement base class
class AppComponent extends LitElement {

  // hack to not use shadow dom
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
  
      <header>
        <nav-component></nav-component>
      </header>

          <div class="container-fluid">
            <div class="row">
             
              <sidebar-component class="sidebar col-md-2 d-none d-md-block bg-light"></sidebar-component>

              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-pwa>

                </router-pwa>
               
            
              </main>
            </div>
          </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('app-root', AppComponent);
