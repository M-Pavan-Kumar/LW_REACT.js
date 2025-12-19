import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    { id: 1, name: "Iphone", price: 100000 },
    { id: 2, name: "Samsung", price: 30000 },
    { id: 3, name: "Vivo", price: 350000 },
    { id: 4, name: "redmi", price: 20000 },
  ];

  return (
    <>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link  to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;