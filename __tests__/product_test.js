
let Product = require("../src/Product.js");

test('getName, renvoie le nom du produit', () => {
  const product = new Product('Product1', 10.0);
  expect(product.getName()).toBe('Product1');
});

test('getPrice, renvoie le prix du produit', () => {
  const product = new Product('Product1', 10.0);
  expect(product.getPrice()).toBe(10.0);
});

test('setName, change le nom du produit', () => {
  const product = new Product('Product1', 10.0);
  product.setName('NewProduct');
  expect(product.getName()).toBe('NewProduct');
});

test('setPrice, change le prix du produit', () => {
  const product = new Product('Product1', 10.0);
  product.setPrice(15.0);
  expect(product.getPrice()).toBe(15.0);
});