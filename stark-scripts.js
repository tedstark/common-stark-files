
// Begin Shared Web Components ======================================================================>
class MyFirstComponent extends HTMLElement {
  
  constructor() {
    super();
    
    var shadowDom = this.attachShadow({mode: 'open'});
    var element = document.createElement('div');
    element.innerHTML = 'This is a web component on the shadowDOM';
    shadowDom.appendChild(element);
  }
  
  connectedCallback() {
    console.log('connected callback invoked!!!');
  }
}

customElements.define('my-first-component', MyFirstComponent);


// End Shared Web Components ======================================================================>