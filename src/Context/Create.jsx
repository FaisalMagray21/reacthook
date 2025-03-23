import React, { Children } from "react";
import { createContext, useState } from "react";
const Usercontext = createContext();

function Create({ children }) {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });

  return (
    <div>
      <Usercontext.Provider value={{ user, setUser }}>
        {children}
      </Usercontext.Provider>
    </div>
  );
}

export { Usercontext, Create };
