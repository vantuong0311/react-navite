"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let products = [
    new Product("Laptop", 1500),
    new Product("Mouse", 25),
    new Product("Keyboard", 75),
    new Product("Monitor", 200),
    new Product("USB Cable", 10),
];
let expensiveProducts = products.filter(p => p.price > 100);
console.log(expensiveProducts);
