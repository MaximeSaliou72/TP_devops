module.exports = class inMemoryStorage {
    constructor() {
        this.data = {};
      }
    
      setValue(key, value) {
        this.data[key] = value;
      }
    
      reset() {
        this.data = {};
      }
    
      restore(keyToRemove) {
        delete this.data[keyToRemove];
      }
    
      total() {
        return Object.values(this.data).reduce((acc, value) => acc + value, 0);
      }
  };
  