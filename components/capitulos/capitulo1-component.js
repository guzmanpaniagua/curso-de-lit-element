// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Capitulo1Component extends LitElement {

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
    <br>
      <h3>Capitulo 1. Que es Lit Element</h3>
      <h4>Introduccion</h4>
      <p>El objetivo de esta guía es acercar el desarrollo de aplicaciones Lit Element a desarrolladores que no tienen conocimientos avanzados de front, si se asume cierta soltura trabajando con html, css y javascript.</p>

      <p>Lit Element es el remplazo natural de Polymer para hacer aplicaciones web con webcomponents, tiene una sintaxis mas moderna parecida a React para escribir las templates de los componentes y elimina gran parte del trabajo manual de crear webcomponents "a mano".</p>

 
      <div class="jumbotron my-4">
    
        <p class="lead">Si no dispones de soltura en html, css y javascript, no obtendrás el máximo partido de esta formación.</p>
        <p class="lead">Puedes empezar por:</p>
         <div class="card" >
        
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><a href="https://www.codecademy.com/learn/learn-html" target="blank"> https://www.codecademy.com/learn/learn-html</a></li>
              <li class="list-group-item"><a href="https://www.codecademy.com/learn/learn-css" target="blank">  https://www.codecademy.com/learn/learn-css</a></li>
              <li class="list-group-item"><a href="https://www.codecademy.com/learn/introduction-to-javascript" target="blank">  https://www.codecademy.com/learn/introduction-to-javascript</a></li>
              <li class="list-group-item"><a href="https://www.codecademy.com/learn/make-a-website" target="blank">  https://www.codecademy.com/learn/make-a-website</a></li>
            </ul>
          </div>
      </div>

      <h4>Empezando sencillo (un componente básico):</h4>
      <p>Los componentes de lit element son un conjunto de html, js y css que ponemos en un fichero, el ejemplo más sencillo lo puedes encontrar en:</p>

      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://stackblitz.com/edit/001-lit-element-basic-component" target="blank">
              https://stackblitz.com/edit/001-lit-element-basic-component
              </a>
          </li>
        </ul>
      </div>

      <p>Este es el aspecto que tiene nuestro componente:</p>
      <br>
 
        <img class="card-img-top"  src="https://raw.githubusercontent.com/guzmanpaniagua/curso-de-lit-element/master/assets/001-basic-component-result.jpg" alt="">
   

      <br>


      <p>stackblitz es una pagina que hace de “editor de código” online, pones alli el html, el js y el css y vas viendo el resultado según vas haciendo los cambios, ademas tienes el boton de fork, que sirve para hacerte una copia y cambiar lo que necesites sin afectar al código original.</p>

      <h4>Empezando sencillo (un componente básico):</h4>
      <p></p>

        `
  }
}
// Register the new element with the browser.
customElements.define('capitulo1-component', Capitulo1Component);