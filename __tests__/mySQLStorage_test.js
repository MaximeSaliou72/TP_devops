const mysql = require('mysql2/promise');
const MySQLStorage = require('../src/MySQLStorage');

// données pour se connecter à une bdd
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'cart_database',
  };

  async function initializeDatabase() {
    const connection = await mysql.createConnection(dbConfig);
    // crée la bdd et ces tables
    await connection.execute(`
    -- Création de la base de données
    CREATE DATABASE IF NOT EXISTS cart_database;
    
    -- Utilisation de la base de données
    USE cart_database;
    
    -- Création de la table des produits
    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );
    
    -- Ajout de quelques produits de test
    INSERT INTO products (name, price) VALUES
    ('apple', 10.5),
    ('raspberry', 13.0),
    ('orange', 7.5);
    
    -- Création de la table de stockage en mémoire
    CREATE TABLE in_memory_storage (
        product_id INT,
        quantity INT,
        PRIMARY KEY (product_id),
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );
    
    -- Création de la table des paniers
    CREATE TABLE carts (
        id INT PRIMARY KEY AUTO_INCREMENT
    );
    
    -- Création de la table des produits dans le panier
    CREATE TABLE cart_products (
        cart_id INT,
        product_id INT,
        quantity INT,
        PRIMARY KEY (cart_id, product_id),
        FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );
    
    -- Ajout de quelques paniers et produits dans les paniers
    INSERT INTO carts DEFAULT VALUES;
    INSERT INTO cart_products (cart_id, product_id, quantity) VALUES
    (1, 1, 3),
    (1, 2, 2);    `);
    connection.end();
  }
  
  beforeAll(async () => {
    // Initialisée la bdd
    await initializeDatabase();
  });
  
  describe('MySQLStorage', () => {
    let storage;
  
    beforeEach(() => {
      // créez une nouvelle instance de MySQLStorage
      storage = new MySQLStorage(dbConfig);
    });
  
    afterEach(async () => {
      // réinitialisez l'état de la bdd
      await initializeDatabase();
    });
  
    test('testSetValue', async () => {
        const key = 'testKey';
        const value = 42;
    
        await storage.setValue(key, value);
    
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM in_memory_storage WHERE product_id = ?;', [key]);
        connection.end();
    
        expect(rows[0].quantity).toBe(value);
      });
    
      test('testTotal', async () => {
        const connectionBefore = await mysql.createConnection(dbConfig);
        await connectionBefore.execute('INSERT INTO in_memory_storage (product_id, quantity) VALUES (?, ?);', ['testKey', 7]);
        await connectionBefore.execute('INSERT INTO in_memory_storage (product_id, quantity) VALUES (?, ?);', ['anotherKey', 3]);
        connectionBefore.end();
    
        const total = await storage.total();
    
        expect(total).toBe(10);
      });

  });