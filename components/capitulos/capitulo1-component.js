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
      <div class="card">
        <img class="card-img-top"  src="https://raw.githubusercontent.com/guzmanpaniagua/curso-de-lit-element/master/assets/001-basic-component-result.jpg" alt="">
      </div>

      <br>


      <p>stackblitz es una pagina que hace de “editor de código” online, pones alli el html, el js y el css y vas viendo el resultado según vas haciendo los cambios, ademas tienes el boton de fork, que sirve para hacerte una copia y cambiar lo que necesites sin afectar al código original.</p>

      <h4>Analisis de un componente básico:</h4>

      <h5> el fichero index.ts.</h5>
      <p>El primer fichero que vamos a mirar es el index.ts, el tipo de proyecto elegido es de tipo typescript, puedes hacer lit element con y sin typescript, en este caso no lo usaremos pero nos beneficiaremos de la compilacion del codigo para que el componente de ejemplo funcione en diferentes navegadores</p>

      <pre><code>
      import './style.css';
      import './polyfills.js';
      import './basic-element.js';
      </code></pre>

      <p>Con el codigo de arriba conseguimos importar los estilos, los polyfills y nuestro componente litelement.</p>

      <p>Lit element hace uso de los modulos de javascript en vez de los html imports de polymer, los modulos de javascript funcionan en la mayoria de los navegadores modernos, pero para dar soporte a navegadores antiguos necesitaremos de transformar el codigo antes de mandarlo a los navegadores, usando babel, typescript u otros.</p>

      
      <h5>analizaremos el fichero style.css.</h5>

      <pre><code>
      body {
        padding: 10px;
       }
       </code></pre>

       <p>el codigo de este fichero es muy sencillo, lo imortante de este fichero es que podemos poner css que sea para todo nuestro proyecto</p>


      <h5>analizaremos el fichero ./polyfills.js</h5>

      <pre><code>
          import '@webcomponents/custom-elements';
          import '@webcomponents/custom-elements/src/native-shim';
       </code></pre>

      <p>en este fichero importamos los diferentes polyfills que queremos que esten disponibles en nuestro proyecto, utilizamos modulos de javascript, y es importante que esten declarados ocmo dependencias del proyecto.</p>

      <div class="jumbotron my-4">
        <div class="card">
          <p class="lead">en este ejemplo las dependencias necesarias ya estan importadas, si haces click en el panel DEPENDENCIES de el sidebar de la izquierdas veras que hemos puesto como dependencias el modulo de polyfils y la propia libreria de lit element, pero podrias importar lo que necesites, desde librerias como Axios a dramworks de css como bootstrap</p>
        </div>
      </div>

      <h5>analizaremos el fichero ./package.json</h5>
      
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

      <h5>analizaremos el fichero ./index.html</h5>

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

      <h5>analizaremos el fichero ./basic-element.js</h5>
      
      <h6><b>importacion de dependencias</b></h6>

      <pre><code>
        import { LitElement, html, css } from 'lit-element';
      </code></pre>

      <p>la primera linea nos sirve para importar un modulo de javascript para utilizarlo en nuestro componente, en este ejemplo, traemos de la libreria de lit element, la clase de la que vamos a estender nuestro componente. la funcion html que permite convertir una cadena de texto en una template y la funcion css que permite convertir una cadena de texto con estilos dentro en css que podamos inyectar en nuestro componente </p>
  
      <h6><b>definicion de clases</b></h6>
      <pre><code>
        class BasicElement extends LitElement {
          ...
        }
      </code></pre>

      <p>los componentes hechos con lit element son clases, aqui creamos una clase BasicElement que extiende de LitElement, de forma que tendremos "gratis" funciones como render para pinatr html, metodos como  get properties para disponer de binding y varias cosas mas muy utiles</p>

      <h6><b>definicion de propiedades</b></h6>

      <pre><code>
        static get properties() {
          return {
            name: { type: String }
          };
        }
      </code></pre>

      <p>el metodo estatico  get properties nos permite definir las propiedades que nuestro componente va a tener, si no definimos las propiedades, las capacidades de binding de lit element no estaran disponibles, es decir si ponemos atributos a nuestro componente, pero no definimos la propiedad, aunque usemos ese nombre de atributo en el componente, no funcionara.</p>

      
      <h6><b>definicion de estilos de componente</b></h6>
      <pre><code>
        static get styles() {
          return css\`
            .primary-block {
              background: var(--primary-color, #4c50af);
              color: white;
            }
            .defaultSpace {
              padding: var(--medium, 16px);
              width: 100%;
              border: 0;
              box-sizing: border-box;
            }
          \`;
        }
        </code></pre>

        <p>el metodo estatico  get styles nos permite definirlos estilos que usaremos en nuestro componente, cosa que generalmente es mala idea, el shadow dom es una feature del standad que te da encapsulacion, lo que puede parecer bueno, pero desgraciadamente conduce a que resuelvas una y otra vez los mimsos porblemas de estilos en muchos componentes, en vez de una unica vez.</p>

        <p>el shadow dom es un standard, pero usarlo o no es una decision compleja, por mi experiencia si lo sabes usar muy bien puede ayudar, pero en la mayoria de proyectos, se usa mal y yo personalmente prefiero no usarlo, al final del curso en el contenido extra pondre una seccion dedicada a los pros y los contras para que puedas tomar una decision informada sobre si usarlo o no.</p>

        <h6><b>definicion de template</b></h6>
        <pre><code>
          render(){
            return html \`
            &lt;div&gt;
              &lt;h4 class=&quot;defaultSpace primary-block&quot;&gt;Basic component by &lt;/h4&gt;
              &lt;ul&gt;
                &lt;li class=&quot;defaultSpace&quot;&gt;\${this.name}&lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
            \`;
          }
        </code></pre>

        <p>Lit element te ofrece el metodo render, dentro de el tu pones una template con el html que quieres que pinte, puedes usar las javascript templates para definir propiedades que quieres que se utilize y que seran remplazadas por sus valores, ademas cada vez que una variable que esta definida en el metodo rende cambia, este se llamara de nuevo y se refrescara lo que se ve en pantalla.</p>

        <h6><b>registro del componente</b></h6>
        <pre><code>
          customElements.define('basic-element', BasicElement);
        </code></pre>

        <p>por ultimo para convertir tu clase en un tag qu ese pueda utilizar en el html, se define como elemento custom indicando el tag que va a tener, pueder mirar en el html, como usamos el tag y como le pasamos un valor a la propiedad name.</p>

        <h3>Ejercicio de practica</h6>

        <p>abre el siguinete componente en stackblizt:</p>

        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a href="https://stackblitz.com/edit/002-lit-element-basic-component-bootstrap?file=basic-element.js" target="blank">
              https://stackblitz.com/edit/002-lit-element-basic-component-bootstrap
                </a>
            </li>
          </ul>
        </div>

        <p>es  un componente muy parecido al anterior, pero en vez de usar los estilos hardcodeados en el componente, utilizamos una libreria como bootstrap para no tener que preocuparnos del look and feel.</p>
       
        <p>fijate que en el index.html hemos puesto bootstrap desde un cdn.</p>
        <pre><code>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        </code></pre>

        <p>y en el componente hemos puesto la funcion de lit element que indica que no vamos a usar shadowdom, por lo que podremos usar css standard en nuestro componente.</p>

        <pre><code>
          createRenderRoot() {
            return this;
          }
        </code></pre>
 
        <p>pulsa el boton de fork para tener tu propia copia del componente.</p>

        <p>modifica el componente para que tenga varias propiedades mas.</p>

        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> First name: Guzmán
            </li>
            <li class="list-group-item">Age: 42
            </li>
            <li class="list-group-item">Salary: not enougth
            </li>
            <li class="list-group-item"> Country: Spain
            </li>
            <li class="list-group-item">Employee: true
            </li>
            <li class="list-group-item">Description:Guzmán is a good, strong, tall, smart and modest person
            </li>
          </ul>
        </div>
      

        <p>tiempo estimado: 5 minutos.</p>
        
        <p>resultado</p>
        <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://stackblitz.com/edit/003-lit-element-basic-component-exercise-1-finished?file=basic-element.js" target="blank">
            https://stackblitz.com/edit/003-lit-element-basic-component-exercise-1-finished</a>
          </li>
        </ul>
      </div>
        
        

    `
  }
}
// Register the new element with the browser.
customElements.define('capitulo1-component', Capitulo1Component);