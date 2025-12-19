import axios from "axios";
import { useState } from "react";

function RegisterUser() {
  const [namee, setName] = useState("");
  const [emaill, setEmail] = useState("");

  const submitform = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: namee,
          email: emaill,
        }
      );
      console.log(res.data);
      alert("User registered successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>setName(e.target.value) }
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <button onClick={submitform}>RegisterUser</button>
      </div>
    </>
  );
}

export default RegisterUser;
