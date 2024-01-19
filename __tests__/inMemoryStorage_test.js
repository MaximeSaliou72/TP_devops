const InMemoryStorage = require('../src/InMemoryStorage');
let Cart = require("../src/Cart.js");
let Product = require("../src/Product.js");

test('setValue, sauvegarde dans le storage', () => {
  const storage = new InMemoryStorage();
  storage.setValue('key', 42);
  expect(storage.total()).toBe(42);
});

test('reset, reset le storage', () => {
  const storage = new InMemoryStorage();
  storage.setValue('key', 42);
  storage.reset();
  expect(storage.total()).toBe(0);
});

test('restore, supprime un produit de la liste', () => {
    const cart = new Cart();
    const product1 = new Product('Product1', 10.0);
    const product2 = new Product('Product2', 15.0);
    cart.buy(product1, 3);
    cart.buy(product2, 2);
    cart.restore(product2);
    expect(cart.total()).toBe(30.0);
});

test('Calcule le total', () => {
  const storage = new InMemoryStorage();
  storage.setValue('key1', 10);
  storage.setValue('key2', 20);
  expect(storage.total()).toBe(30);
});