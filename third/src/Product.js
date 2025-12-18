import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    { id: 1, name: "Iphone" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Vivo" },
    { id: 4, name: "redmi" },
  ];

  return (
    <>
      <div></div>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </>
  );
};

export default Product;
