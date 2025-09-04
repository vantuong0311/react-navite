class Product1 {
  constructor(public name: string, public price: number) {}
}

class Order {
  private products: Product1[] = [];

  addProduct(product: Product1): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

const order = new Order();
order.addProduct(new Product1('Book', 50));
order.addProduct(new Product1('Pen', 10));
console.log('Order total:', order.calculateTotal());