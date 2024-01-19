module.exports = class Cart {
  constructor() {
    this.items = [];
  }

  buy(product, quantity) {
    this.items.push({ product, quantity });
  }

  reset() {
    this.items = [];
  }

  restore(productToRemove) {
    this.items = this.items.filter(item => item.product !== productToRemove);
  }

  total() {
    return this.items.reduce((acc, item) => acc + item.product.getPrice() * item.quantity, 0);
  }
};
