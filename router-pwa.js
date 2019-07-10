import { installRouter } from 'pwa-helpers/router.js';
import regexparam from 'regexparam';
// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
// Extend the LitElement base class
class RouterPWA extends LitElement {
  static get properties() {
    return {
      _page: { type: String },
      parameters: { type: Object }
    };
  }
  constructor() {
    super();
    this.parameters = {};
  }
    // hack to not use shadow dom
  createRenderRoot() {
    return this;
  }
  firstUpdated() {
    installRouter((location) => this._locationChanged(location));
  }
  _locationChanged(location) {
    const path = window.decodeURIComponent(location.pathname);
    const page = path === '/' ? 'capitulo1' : path.slice(1);

    this._loadPage(page);
  }
  _loadPage(page) {
    switch (true) {
      case 'capitulo1' === page:
        import('./components/capitulos/capitulo1-component.js');
        break;
      case 'capitulo2' === page:
        import('./components/capitulos/capitulo2-component.js');
        break;
      case 'capitulo3' === page:
        import('./components/capitulos/capitulo3-component.js');
        break;
      case 'extraContent1' === page:
        import('./components/extraContent/extraContent1-component.js');
        break;
    }
    this._page = page;
  }
  // Example param-assignment
  getParameters(path, result) {
    let i=0, out={};
    let matches = result.pattern.exec(path);
    while (i < result.keys.length) {
      out[ result.keys[i] ] = matches[++i] || null;
    }
    return out;
  }
  render() {
    return html`
    <div>
        <capitulo1-component class="page" ?active="${this._page === 'capitulo1'}"></capitulo1-component>
        <capitulo2-component class="page" ?active="${this._page === 'capitulo2'}"></capitulo2-component>
         <capitulo3-component class="page" ?active="${this._page === 'capitulo3'}"></capitulo3-component>
        <extra-content1 class="page" ?active="${this._page === 'extraContent1'}"></extra-content1>
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('router-pwa', RouterPWA);