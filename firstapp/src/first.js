import { useState } from "react";
import Second from "./second";
import Sum from "./Sum";

function Helloworld() {
  const [state, setState] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  return (
    <>
      <>This is first component</>
      <div>{state.brand}</div>
      <p>Hi helloo</p>
      <p>This is first component</p>
      <Second />
      <Sum />
    </>
  );
}

export default Helloworld;
