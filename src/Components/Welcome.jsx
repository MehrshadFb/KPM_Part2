import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Welcome.css";

const Welcome = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setData(data.data));
  }, []);

  return (
    <center>
      <div className="render-data">
        <h1>Welcome {location.state.email}</h1>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default Welcome;
