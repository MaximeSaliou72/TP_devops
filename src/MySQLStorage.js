const mysql = require('mysql2/promise');

module.exports = class MySQLStorage {
    constructor(dbConfig) {
      this.dbConfig = dbConfig;
    }
  
    async setValue(product_id, quantity) {
      const connection = await mysql.createConnection(this.dbConfig);
      await connection.execute('INSERT INTO in_memory_storage (product_id, quantity) VALUES (?, ?);', [product_id, quantity]);
      connection.end();
    }
  
    async total() {
      const connection = await mysql.createConnection(this.dbConfig);
      const [rows] = await connection.execute('SELECT SUM(quantity) AS total FROM in_memory_storage;');
      connection.end();
      return rows[0].total || 0;
    }
  };