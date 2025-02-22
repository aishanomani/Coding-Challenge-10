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
class Inventory { // Task 3
    constructor() {
      this.products = [];
      this.orders = [];
    }
    addProduct(product) { // Task 3
      this.products.push(product);
    }
    listProducts() { // Task 3
      this.products.forEach(product => console.log(product.getDetails()));
    }
    placeOrder(orderId, product, quantity) { // Task 4
        if (product.stock >= quantity) {
          const order = new Order(orderId, product, quantity);
          this.orders.push(order);
        } else {
          console.log("Insufficient stock");
        }
      }
      listOrders() { // Task 4
        this.orders.forEach(order => console.log(order.getOrderDetails()));
      }
      restockProduct(productId, quantity) { // Task 5
        const product = this.products.find(p => p.id === productId);
        if (product) {
          product.stock += quantity; 
        } else {
            console.log("Product not found");
          }
      }
    }
  const inventory = new Inventory(); // Task 3 
  inventory.addProduct(prod1);
  inventory.listProducts(); // Expected Output
  
// Task 4: Implementing Order Management
console.log("********** Implemented Order Management **********");
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails()); // Expected Output

// Task 5: Implementing Product Restocking
console.log("********** Implemented Product Restocking **********");
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); // Expected Output
