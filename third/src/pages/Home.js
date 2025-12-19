import React from "react";
import Navbar from "../Navbar";
import Product from "../Product";
import GetApi from "./GetApi";

const Home = () => {
  return (
    <>
      <div>This is home page</div>;
      <Navbar />
      <Product />
      <GetApi />
    </>
  );
};

export default Home;
