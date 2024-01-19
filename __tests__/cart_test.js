let Cart = require("../src/Cart.js");
let Product = require("../src/Product.js");
const InMemoryStorage = require('../src/InMemoryStorage');

// Test d'achat d'un article
test("TestBuy, achat d'un article", () => {
    // Création d'un stockage en mémoire
    const storage = new InMemoryStorage();
    // Création d'un panier avec le stockage
    const cart = new Cart(storage);
    // Création d'un produit Product1 au prix de 10.0
    const product = new Product('Product1', 10.0);
    // Achat de 3 exemplaires du produit
    cart.buy(product, 3);
    // Vérification que le total du panier est de 30.0
    expect(cart.total()).toBe(30.0);
});

// Test de réinitialisation du panier
test('testReset, reset le panier ', () => {
    const storage = new InMemoryStorage();
    const cart = new Cart(storage);
    const product = new Product('Product1', 10.0);
    cart.buy(product, 3);
    // Réinitialisation du panier
    cart.reset();
    expect(cart.total()).toBe(0.0);
});

// Suppression d'un produit du panier
test('testRestore, supprime un produit', () => {
    const storage = new InMemoryStorage();
    const cart = new Cart(storage);
    const product1 = new Product('Product1', 10.0);
    const product2 = new Product('Product2', 15.0);
    cart.buy(product1, 3);
    cart.buy(product2, 2);
    // Suppréssion du produit2
    cart.restore(product2);
    expect(cart.total()).toBe(30.0);
});

// Test du calcul du total avec plusieurs produits
test('testTotal, calcul le total de plusieurs produit', () => {
    const storage = new InMemoryStorage();
    const cart = new Cart(storage);
    // Achat de 2 produits différent
    const product1 = new Product('Product1', 10.0);
    const product2 = new Product('Product2', 15.0);
    cart.buy(product1, 2);
    cart.buy(product2, 1);
    expect(cart.total()).toBe(35.0);
});