
let Product = require("../src/Product.js");

test('getName function returns the correct name', () => {
  const product = new Product('Product1', 10.0);
  expect(product.getName()).toBe('Product1');
});

test('getPrice function returns the correct price', () => {
  const product = new Product('Product1', 10.0);
  expect(product.getPrice()).toBe(10.0);
});

test('setName function sets the correct name', () => {
  const product = new Product('Product1', 10.0);
  product.setName('NewProduct');
  expect(product.getName()).toBe('NewProduct');
});

test('setPrice function sets the correct price', () => {
  const product = new Product('Product1', 10.0);
  product.setPrice(15.0);
  expect(product.getPrice()).toBe(15.0);
});