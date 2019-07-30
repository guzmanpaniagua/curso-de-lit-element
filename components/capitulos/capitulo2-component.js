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

      <h4>Estructura del proyecto</h4>

      <p>A todos nos gusta sentirnos especiales, unicos, ser capaces de hacerlo mejor que los demas e inventar algo, desgraciadamente la realidad se impone y lo que en una ppt suena maravilloso en el mundo real fracasa, miserablemente.</p>

      <p>Organizar la estructura de tus proyectos es algo que requiere mucha experiencia y que muchos pasan por alto porque en sus proyectos personales su estructuura favorita a ellos les funciona, imaginate que conoces a alguien que tiene su garaje muy ordenado, e intentas trasladar su "sistema" a un almacen de amazon de 50.000 metros cuadrados, sobra decir que no va a funcionar, pues lo mismo ocurre con como organizas tus proyectos cuando van a pasar por alli muchos desarrolladores.</p>

      <p>Las dos formas mas habituales de agrupar tu codigo es por tipo o por modulos, por tipo significa que tus paginas estan juntas, tus servicios juntos, tus componentes juntos y cuando necesitas algo sabes que tipo es y vas a la carpeta de ese tipo, por modulos significa que generas carpetas por funcionalidad, login, dashboard... y cada cosa que pertenece a esas entidades esta alli juntica.</p>

      <p>En el siguiente ejemplo agruparemos las cosas en una carpeta componentes, porque es suficiente para la escala del proyecto, pero esto no quiere decir que debas de agrupar asi el codigo en proyectos reales.</p>
      <br>
      <h4>Ejemplos de starter templates para lit element</h4>
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


      como nos traemos un componente (imports)
      ejemplo todo junto 
      ejemplo separado 
      ejercicio 
      y que pasa cuando el navegador no soporta modulos de js 

    `
  }
}
// Register the new element with the browser.
customElements.define('capitulo2-component', Capitulo2Component);