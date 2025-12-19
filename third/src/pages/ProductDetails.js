import React from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const products = [
    { id: 1, name: "Iphone", price: 100000 },
    { id: 2, name: "Samsung", price: 30000 },
    { id: 3, name: "Vivo", price: 350000 },
    { id: 4, name: "redmi", price: 20000 },
  ];

  const product = products.find((item) => item.id === Number(id));

  return (
    <>
      <div>ProductDetails</div>
      <h3>ID : {product.id}</h3>
      <h3>Name : {product.name}</h3>
      <h3>Price : {product.price}</h3>
    </>
  );
};

export default ProductDetails;
