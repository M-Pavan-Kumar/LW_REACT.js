import React from "react";
import Navbar from "../Navbar";
import Product from "../Product";
import GetApi from "./GetApi";
import AntdLearn from "./AntdLearn";

const Home = () => {
  return (
    <>
      <div>
        <div>This is home page</div>;
        <Navbar />
        <Product />
        <GetApi />
      </div>

      <div>
        <AntdLearn />
      </div>
    </>
  );
};

export default Home;
