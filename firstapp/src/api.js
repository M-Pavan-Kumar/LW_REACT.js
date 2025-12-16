import React, { useEffect, useState } from "react";
import "./Api.css";

const Api = () => {
  const [data, setData] = useState(null);
  async function getdata() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    getdata();
  }, []);
  // getdata()

  const items_toshow = data ? data.slice(0, 10) : null;
  return (
    <>
      <div className="user-card-container">
        {items_toshow &&
          items_toshow.map((user) => (
            <div key={user.id} className="user-card">
              <h4>{user.id} - user data</h4>
              <ul>
                <li>{user.id}</li>
                <li>{user.title}</li>
                <li>
                  Completed :{" "}
                  <span
                    className={
                      user.completed ? "is_completed" : "is_not_completed"
                    }
                  >
                    {user.completed.toString()}
                  </span>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default Api;
