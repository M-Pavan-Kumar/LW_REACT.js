import React, { useState } from "react";

const User = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <>
      <h2>{isLoggedin ? "Welcome User" : "Please login"}</h2>
      {!isLoggedin ? (
        <button
          onClick={() => {
            setIsLoggedin(!isLoggedin);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedin(!isLoggedin);
          }}
        >
          Logout
        </button>
      )}

      {/* <button onClick={()=>{setIsLoggedin(!isLoggedin)}}>{!isLoggedin?"Login":"Logout"}</button> */}
    </>
  );
};

export default User;
