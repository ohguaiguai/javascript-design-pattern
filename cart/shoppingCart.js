import getCart from './getCart';

export default class ShoppingCart {
  constructor(app) {
    this.app = app;
    this.$el = $('<div>');
    this.cart = getCart();
  }
  initBtn() {
    let $btn = $('<button>购物车</button>');
    $btn.click(() => {
      this.showCart();
    });
    this.$el.append($btn);
  }
  showCart() {}
  render() {
    this.app.$el.append(this.$el);
  }
  init() {
    this.initBtn();
    this.render();
  }
}
