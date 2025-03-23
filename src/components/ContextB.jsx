import React from "react";
import { Usercontext } from "../Context/Create";
import { useContext } from "react";
function ContextB() {
  const { user, setUser } = useContext(Usercontext);
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

export default ContextB;
