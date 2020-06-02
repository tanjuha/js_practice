export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    // afterbegin, afterend, beforebegin, beforeend
    // this.$el.insertAdjacentHTML('afterbegin', '<h1>Tom</h1>');
    const $root = document.createElement('div');

    this.components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML('beforeend', component.toHTML());
    });

    return $root;
  }

  render() {
    return this.$el.append(this.getRoot());
  }
}
