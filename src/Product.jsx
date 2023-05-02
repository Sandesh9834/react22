export function Product({ productName, productPrice }) {
  return (
    <div>
      <h3>Product</h3>
      <p>
        Name :
        <span style={{ color: "blue" }}>
          <b>{productName}</b>
        </span>
      </p>
      <p>
        Price :
        <span style={{ color: "green" }}>
          <i>Rs. {productPrice}</i>
        </span>
      </p>
    </div>
  );
}
