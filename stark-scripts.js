class MyFirstComponent extends HTMLElement {
  
  constructor() {
    super();
    
    var shadowDom = this.attachShadow({mode: 'open'});
    var el = document.createElement('div');
    el.innerHTML = 'This is a web component on the shadowDOM';
    shadowDom.appendChild(el);
  }
  
  connectedCallback() {
    console.log('connected callback invoked!!!');
  }
}

customElements.define('my-first-component', MyFirstComponent);
