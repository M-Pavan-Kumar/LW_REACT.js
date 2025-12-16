import { useState } from "react";
import Second from "./second";
import Sum from "./Sum";

function Helloworld() {
  const [state,setState]=useState({})
  return (
    
    <>


      <p>Hi helloo</p>
      <p>This is first component</p>
      <Second/>
      <Sum/>
    </>
  );
}

export default Helloworld;
