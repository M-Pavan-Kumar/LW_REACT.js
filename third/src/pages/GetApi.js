import { useEffect, useState } from "react";
import axios from "axios";

const GetApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>User Details</h2>
      <div>
        {users.map((user) => (
          <div key={user.id} className="user-details">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetApi;
