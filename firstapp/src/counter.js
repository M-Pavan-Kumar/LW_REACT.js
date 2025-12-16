import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //   useEffect()
  //   [] - dependency array
  //   empty - runs after every render
  //   [value] - runs wherever value updates // usestate

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p></p>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
