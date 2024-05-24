/**
 * Router class provides an element that selects which of its children
 * to render based on window.location.hash
 */
class Router extends HTMLElement {
  constructor() {
    super();
    // adding a shadow root makes the element's children
    // detached from the DOM (not visible)
    this.attachShadow({mode: 'open'});
    // call the render method whenever we see a hashchange
    // event - when the user clicks on an internal link
    window.onhashchange = () => this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // copy nodes out of the shadow root back into the element
    for (let i=0; i<this.shadowRoot.children.length; i++) {
      this.appendChild(this.shadowRoot.children[i]);
    }

    // now move any element with a route attribute matching the hash
    // into the shadow root
    for (let i=0; i<this.children.length; i++) {
      const child = this.children[i];
      const route = child.getAttribute('route');
      if (route === window.location.hash) {
        this.shadowRoot.replaceChildren(child);
      }
    }
  }
}

customElements.define('router-component', Router);
