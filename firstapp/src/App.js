import React from "react";
import Helloworld from "./first"
import Counter from "./counter";
import User from "./User";
import Api from "./api";

const App = () => {
  return (
    <>

      <div>App</div>
      <Helloworld/>
      <Counter/>
      <User/>
      <Api/>
    </>
  );
};

export default App;
