function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price : {price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
export default ProductCard;
