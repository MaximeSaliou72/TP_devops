let Cart = require("../src/Cart.js");
let Product = require("../src/Product.js");


test("TestBuy, achat d'un article", () => {
    const cart = new Cart();
    const product = new Product('Product1', 10.0);
    cart.buy(product, 3);
    expect(cart.total()).toBe(30.0);
});

test('testReset, reset le panier ', () => {
    const cart = new Cart();
    const product = new Product('Product1', 10.0);
    cart.buy(product, 3);
    cart.reset();
    expect(cart.total()).toBe(0.0);
});

test('testRestore, supprime un produit', () => {
    const cart = new Cart();
    const product1 = new Product('Product1', 10.0);
    const product2 = new Product('Product2', 15.0);
    cart.buy(product1, 3);
    cart.buy(product2, 2);
    cart.restore(product2);
    expect(cart.total()).toBe(30.0);
});

test('testTotal, calcul le total de plusieurs produit', () => {
    const cart = new Cart();
    const product1 = new Product('Product1', 10.0);
    const product2 = new Product('Product2', 15.0);
    cart.buy(product1, 2);
    cart.buy(product2, 1);
    expect(cart.total()).toBe(35.0);
});