import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id,name,price} = useParams();
  console.log(id)
  console.log(name)
  

  return (
    <>
      <div>ProductDetails</div>

      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </>
  );
};

export default ProductDetails;
