import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";

export default function Register() {
  const [user, setUser] = useState({});
  const { users, setUsers } = useContext(AppContext);
  const Navigate = useNavigate();

  const handleSubmit = () => {

    const exists = users.find(u => u.email === user.email);
    if (exists) {
      alert("User already exists");
      return;
    }

    setUsers([...users, user]);
    Navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <Link to="/login">Already a member? Login here...</Link>
    </div>
  );
}
