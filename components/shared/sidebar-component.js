// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class SideBarComponent extends LitElement {


  createRenderRoot() {
    return this;
  }

  render() {

    return html`

            <nav >
<div class="sidebar-sticky">
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Capitulos</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                
                    </a>
                  </h6>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                   
                      <a class="nav-link active" href="capitulo1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        Capitulo 1</span>
                      </a>
                    </li>
                    <li class="nav-item">
                   
                      <a class="nav-link" href="capitulo2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        Capitulo 2</span>
                      </a>
                    </li>
                     <li class="nav-item">
                   
                      <a class="nav-link" href="capitulo3">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        Capitulo 3</span>
                      </a>
                    </li>
                  </ul>

                  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Contenido extra</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                
                    </a>
                  </h6>
                  <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                      <a class="nav-link" href="extraContent1">
                        shadow dom
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
  
        `
  }
}
// Register the new element with the browser.
customElements.define('sidebar-component', SideBarComponent);