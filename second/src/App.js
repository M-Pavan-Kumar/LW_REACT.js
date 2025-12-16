import React from "react";
import Child from "./Child";

const App = () => {
  const Student = { name: "Pavan kumar", age: 21 };

  return (
    <>
      <div>This is App component</div>
      {/* <Child name="pavan" age="21" /> */}
      <Child student={Student} />
      
    </>
  );
};

export default App;
