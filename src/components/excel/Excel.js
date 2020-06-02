import {$} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    // afterbegin, afterend, beforebegin, beforeend
    // this.$el.insertAdjacentHTML('afterbegin', '<h1>Tom</h1>');

    // const $root = document.createElement('div');
    // $root.classList.add('excel');
    const $root = $.create('div', 'excel');


    this.components.forEach((Component) => {
      // const $el = document.createElement('div');
      // $el.classList.add(Component.className);
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });

    return $root;
  }

  render() {
    return this.$el.append(this.getRoot());
  }
}
