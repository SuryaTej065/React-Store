import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "./App";
export default function Register() {
  const [user, setUser] = useState({});
  const Navigate = useNavigate()
  const { users, setUsers } = useContext(AppContext);
  const handleSubmit = () => {
    setUsers([...users, user]);
    Navigate("/login")
  };
  const [count, setCount] = useState(0);
  const [dic, setDic] = useState(0);
  const [a,setA] = useState(0);
  const [b,setB] = useState(0);
  
  const [result,setResult] = useState()
  const sum = () => {
    setResult(Number(a) + Number(b))
  }

  const updateDic = () => {
    setDic(dic + 1);
  };

  const reduceDic = () => {
    setDic(dic - 1);
  };

  const updateCount = () => {
    setCount(count + 1);
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
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Already a member? Login Here...</Link>
      </p>
<hr />
      <p>
        {count}<br></br>
        <button onClick={updateCount}>Update Count</button>
      </p>
      <p>
        {dic}<br></br>
        <button onClick={updateDic}> + </button>
        <button onClick={reduceDic}> - </button>
      </p>

<p>
  <input type="number" onChange={(e) => setA(e.target.value)}/>
  <input type="number" onChange={(e) => setB(e.target.value)}/>
  <button onClick={sum}> ADD </button>
</p>
<p>
  {result}
</p>
    </div>
  );
}