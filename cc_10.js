// Task 1: Creating a Product Class
console.log("********** Created Product Class **********");
class Product { 
    constructor(name, id, price, stock) { 
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails(){ 
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`; 
    };
    updateStock(quantity){
        this.stock -= quantity;
    };
};
const prod1 = new Product("Laptop", 101, 1200, 10); 
console.log(prod1.getDetails()); //Expected Output
prod1.updateStock(3);
console.log(prod1.getDetails()); //Expected Output

// Task 2: Creating an Order Class
console.log("********** Created Order Class **********");
class Order { 
    constructor(orderId, product, quantity) { 
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    };
    getOrderDetails() { 
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`; 
    };
};
const order1 = new Order(501, prod1, 2); 
console.log(order1.getOrderDetails()); // Expected Output
console.log(prod1.getDetails()); // Expected output

// Task 3: Creating an Inventory Class
console.log("********** Created Inventory Class **********");
class Inventory {
    constructor() {
      this.products = [];
      this.orders = [];
    }
    addProduct(product) {
      this.products.push(product);
    }
    listProducts() {
      this.products.forEach(product => console.log(product.getDetails()));
    }
    }
  const inventory = new Inventory();
  inventory.addProduct(prod1);
  inventory.listProducts(); // Expected Output
  
  