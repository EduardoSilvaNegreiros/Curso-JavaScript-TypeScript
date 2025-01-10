export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const product1 = new Product('Camiseta', 49.9);
const product2 = new Product('Caneca', 1.9);
const product3 = new Product('Caneta', 0.9);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProduct(product1, product2, product3);
console.log(shoppingCart.totalValue());
console.log(shoppingCart.quantityProducts());
