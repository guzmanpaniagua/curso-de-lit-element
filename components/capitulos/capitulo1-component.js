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

      <h4>Analisis de un componente básico:</h4>
      <p>El primer fichero que vamos a mirar es el index.ts, el tipo de proyecto elegido es de tipo typescript, puedes hacer lit element con y sin typescript, en este caso no lo usaremos pero nos beneficiaremos de la compilacion del codigo para que el componente de ejemplo funcione en diferentes navegadores</p>

      <pre><code>
      import './style.css';
      import './polyfills.js';
      import './basic-element.js';
      </code></pre>

      <p>Con el codigo de arriba conseguimos importar los estilos, los polyfills y nuestro componente litelement.</p>

      <p>Lit element hace uso de los modulos de javascript en vez de los html imports de polymer, los modulos de javascript funcionan en la mayoria de los navegadores modernos, pero para dar soporte a navegadores antiguos necesitaremos de transformar el codigo antes de mandarlo a los navegadores, usando babel, typescript u otros.</p>

      
      <p>analizaremos el fichero style.css.</p>

      <pre><code>
      body {
        padding: 10px;
       }
       </code></pre>

       <p>el codigo de este fichero es muy sencillo, lo imortante de este fichero es que podemos poner css que sea para todo nuestro proyecto</p>


      <p>analizaremos el fichero ./polyfills.js</p>

      <pre><code>
          import '@webcomponents/custom-elements';
          import '@webcomponents/custom-elements/src/native-shim';
       </code></pre>

      <p>en este fichero importamos los diferentes polyfills que queremos que esten disponibles en nuestro proyecto, utilizamos modulos de javascript, y es importante que esten declarados ocmo dependencias del proyecto.</p>

      <div class="card">
         <p>en este ejemplo las dependencias necesarias ya estan importadas, si haces click en el panel DEPENDENCIES de el sidebar de la izquierdas veras que hemos puesto como dependencias el modulo de polyfils y la propia libreria de lit element, pero podrias importar lo que necesites, desde librerias como Axios a dramworks de css como bootstrap</p>
      </div>

      <p>analizaremos el fichero ./package.json</p>
      
      <pre><code>
        {
          "name": "lit-element-basic-example",
          "version": "0.0.0",
          "private": true,
          "dependencies": {
            "@webcomponents/custom-elements": "^1.2.4",
            "lit-element": "^2.1.0"
          }
        }
      </code></pre>

      <p>este fichero lo utiliza stackblizt para mantener las dependencias que hemos visto visualmente en la seccion del sidebar anteriormente, tambien puedes cambiarlo aqui a mano si te es mas comodo</p>

      <p>stackblizt tiene una aproximacion agresiva a la hora de gestionar los modulos y las dependencias, tiene como gran ventaja que es mas rapido que en local descargarte todas las dependencias, y como desventaja que cosas como usar ficheros de imagenes o json se hace un poco mas complido.</p>

      <p>analizaremos el fichero ./index.html</p>

      <pre><code>
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
          &lt;meta charset=&quot;UTF-8&quot;&gt;
          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
          
          &lt;title&gt;001 lit element basic component&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
          &lt;basic-element name=&quot;Guzman&quot;&gt;&lt;/basic-element&gt;
        &lt;/body&gt;
        &lt;/html&gt;
      </code></pre>

      <p>el index.html es la pagina principal de la aplicacion, en el ejemplo tenemos puesta una etiqueta de nuestro componente basico, para que se reperesente en la ventana de reultado y poder verlo</p>

    `
  }
}
// Register the new element with the browser.
customElements.define('capitulo1-component', Capitulo1Component);