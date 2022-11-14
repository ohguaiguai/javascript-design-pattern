import ShoppingCart from '../shoppingCart/shoppingCart.js';
import List from '../list/list.js';

export default class App {
  constructor(id) {
    this.$el = $('#' + id);
  }
  // 初始化购物车
  initShoppingCart() {
    let shoppingCart = new ShoppingCart(this);
    shoppingCart.init();
  }
  // 初始化列表
  initList() {
    let list = new List(this);
    list.init();
  }
  init() {
    this.initShoppingCart();
    this.initList();
  }
}
