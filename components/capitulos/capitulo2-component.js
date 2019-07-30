// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Capitulo2Component extends LitElement {

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
      <h3>Capitulo 2. Usando unos componentes dentro de otros</h3>
      <h4>Introduccion</h4>

      <p>Para un ejemplo sencilo, esta bien tener un solo componente, cuando los proyectos crecen, es mejor tener el codigo dividido en varios componentes y que cada uno se encargue de una cosa.</p>

      <p>Un componente es un trozo de codigo que vas a reutilizar varias veces, de forma que en vez de copiar y pegar un trozo de html, css y funcionalidad varias veces, generamos un nombre (tag) y lo podemos usar varias veces con un solo codigo fuente que mantener.</p>
     
      <p>De la experiencia con Polymer y otros frameworks de componentes, hemos aprendido que no es una buena idea volverse loco y considerar todo un componente, si solo se usa una vez es probable que no debas de crearte un componente, si no tiene funcionalidad como en el caso de un boton, aveces es mejor no crear un componente y usar una clase nada mas.</p>

      <p>Lanzarse a crear componentes como si no hubiese mañana termina mal, muy mal, con repositorios con muchos componentes, muchos practicamente iguales pero con pequeñas diferencias y que luego hay que mantener.</p>

      <p>Dicho esto, la regla general es que si ves que algo lo repites en varios sitios, generas un componente, puedes generar componentes de "pagina" que en realidad pertenecen a tu aplicacion y que no seran reutilizables, los usas para dar forma a tu aplicacion y englobar cosas para simplificar tu enrutado por ejemplo y por ultimo de vez en cuando tendras que "unificar" varios componentes en uno y darle un nombre generico para que tu sistema sea mantenible.</p>
      <br>
      <br>
      <h4>Estructura del proyecto</h4>
      <br>
      <p>A todos nos gusta sentirnos especiales, unicos, ser capaces de hacerlo mejor que los demas e inventar algo, desgraciadamente la realidad se impone y lo que en una ppt suena maravilloso en el mundo real fracasa, miserablemente.</p>

      <p>Organizar la estructura de tus proyectos es algo que requiere mucha experiencia y que muchos pasan por alto porque en sus proyectos personales su estructuura favorita a ellos les funciona, imaginate que conoces a alguien que tiene su garaje muy ordenado, e intentas trasladar su "sistema" a un almacen de amazon de 50.000 metros cuadrados, sobra decir que no va a funcionar, pues lo mismo ocurre con como organizas tus proyectos cuando van a pasar por alli muchos desarrolladores.</p>

      <p>Las dos formas mas habituales de agrupar tu codigo es por tipo o por modulos, por tipo significa que tus paginas estan juntas, tus servicios juntos, tus componentes juntos y cuando necesitas algo sabes que tipo es y vas a la carpeta de ese tipo, por modulos significa que generas carpetas por funcionalidad, login, dashboard... y cada cosa que pertenece a esas entidades esta alli juntica.</p>

      <p>En el siguiente ejemplo agruparemos las cosas en una carpeta componentes, porque es suficiente para la escala del proyecto, pero esto no quiere decir que debas de agrupar asi el codigo en proyectos reales.</p>
     
      <br>
      <br>
      <h4>Ejemplos de starter templates para lit element</h4>
      <br>
      <p>En estos enlaces puedes encontrar ejemplos de como se pueden estructurr aplicaciones con lit element, pero puedes tambien exxtrapolar cualquier otro sistema consolidado de estructurar tus proyectos, como pueden ser los de angular o react sin demasiados problemas.</p>
      <br>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://github.com/Polymer/pwa-starter-kit" target="blank">
              https://github.com/Polymer/pwa-starter-kit
            </a>
          </li>
          <li class="list-group-item">
          <a href="https://github.com/open-wc/open-wc-starter-app" target="blank">
          https://github.com/open-wc/open-wc-starter-app
          </a>
        </li>
        </ul>
      </div>
      <br>
      <br>
      <h4>Ejemplo practico 1: extraer un componente</h4>
      <br>
      <p>Manos a la obra, vamos a ver un ejemplo de componente lit element que es demasiado grande y vamos a generar otros componentes, para tener algo mas manejable.</p>
      <br>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://basic-example-lit-element-with-bootstrap.stackblitz.io" target="blank">
              Ejemplo de pagina con bootstrap
            </a>
          </li>
        </ul>
      </div>
      <br>

      <p>Supon que te quieres hacer un Curriculum online, y aprovechar para aprender lit element todo en uno, nos abrimos stackblizt, duplicamos el ejemplo de lit anterior y como somos desarrolladores, no maquetadores, arrastramos unos cuantos componentes de bootstrap para hacer un proptotipado mas o menos rapido de lo que vamos ha hacer.</p>

      <p>Si te fijas en el resultado vemos que rapidamente el html se hace demasiado grande y dificil de mantener, realmente la unica diferencia con el ejemplo basico es que hay mucho mas html, funcionalidad aqui poca.</p>

      <p>Lo primero seria identificar que candidatos a componente tenemos, podriamos empezar por la cabecera o el footer, que son secciones claras, pero yo he empezaria por el jumbotron o por las cards, porque, pues porque se repiten y es un elemento que es bastante probable que reutilize en diferentes paginas de mi curriculum.</p>

      <br>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://stackblitz.com/edit/basic-example-lit-element-with-bootstrap-nested?file=my-element.js" target="blank">
              Ejemplo de pagina con bootstrap con componentes
            </a>
          </li>
        </ul>
      </div>
      <br>

      <p>En el ejemplo de el enlace de arriba veras que que creado una carpeta componentes y dentro he generado ejemplos de componentes, el mas basico es el jumbotron, un componente lit sin aspiraciones, en el que simplemente he copiado y pegado el html.</p>

  
      <pre><code>
      // Import the LitElement base class and html helper function
      import { LitElement, html } from 'lit-element';
      
      // Extend the LitElement base class
      class JumbotronElement extends LitElement {
        createRenderRoot() {
          return this;
        }
        render(){
          return html\`
      
            &lt;!-- Jumbotron Header --&gt;
            &lt;header class=&quot;jumbotron my-4&quot;&gt;
              &lt;h1 class=&quot;display-3&quot;&gt;A Warm Welcome!&lt;/h1&gt;
              &lt;p class=&quot;lead&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.&lt;/p&gt;
              &lt;a href=&quot;#&quot; class=&quot;btn btn-primary btn-lg&quot;&gt;Call to action!&lt;/a&gt;
            &lt;/header&gt;
      
          \`;
        }
      }
      // Register the new element with the browser.
      customElements.define('jumbotron-element', JumbotronElement);
      </code></pre>

      <p>Destacar que he utilizado createRenderRoot para evitar el molesto shadow dom y que funcionen los estilos de bootstrap.</p>

      <p>Podriamos poner el titulo o el texto o los botones como propiedades, pero para este ejemplo basico es suficinete.</p>

      <p>En el componente MyElement, he utilizado un import para traes el componente unevo y poder utilizarlo </p>

      <pre><code>
        import './components/jumbotron-element.js';
      </code></pre>
      <br>

      <p>y he remplazado el trozo de html que he puesto en el componente por la nueva tag </p>
  
      <pre><code>
        &lt;jumbotron-element&gt;&lt;/jumbotron-element&gt;
      </code></pre>

            
      <p>Estos pasos que hemos realizado aqui no son mas que un extraxtion patern, que es una de las tecnicas de refactor mas abituales.</p>

      <br>
      <h4>Ejemplo practico 2, doble anidacion</h4>
      <br>

      <p>De forma analoga a como hemos hecho con el jumbotron, se ha hecho con las cards.</p>
      <br>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://stackblitz.com/edit/basic-example-lit-element-with-bootstrap-nested?file=components%2Fcard-element.js" target="blank">
              Card element
            </a>
          </li>
        </ul>
      </div>
      <br>
      <p>Pero en este caso en vez de usarlo directamente en el componente principal, hemos generado un segundo componente llamado lista de card con la intencion de que se vea que se puede de forma sencilla incluir un componente dentro de otro y dentro de otro mas.</p>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://stackblitz.com/edit/basic-example-lit-element-with-bootstrap-nested?file=components%2Flist-cards-element.js" target="blank">
              List Cards element
            </a>
          </li>
        </ul>
      </div>
      <br>
    `
  }
}
// Register the new element with the browser.
customElements.define('capitulo2-component', Capitulo2Component);