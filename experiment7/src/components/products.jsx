import ProductCard from "./product-card";

const products = [
  { id: 1, name: "Wireless mouse", price: 99, inStock: true },
  { id: 2, name: "Keyboard", price: 199, inStock: false },
  { id: 3, name: "Monitor", price: 299, inStock: true },
];

function Products() {
  return (
    <div>
      <h1>Products List</h1>
      <div className="products">
        {products.length > 0 &&
          products.map((p) => {
            return (
              <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                inStock={p.inStock}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Products;
