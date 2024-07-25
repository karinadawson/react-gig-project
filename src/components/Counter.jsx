import React from "react";
import { useState } from "react";
import userEvent from "@testing-library/user-event"

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = () => {
      setCount(count + 1);
    };

    const decrementCounter = () => {
        setCount(count - 1);
    }
  
    return (
      <div>
        <h1>Counter:</h1>
        <h2 role="counter">{count}</h2>
        <button onClick={decrementCounter}>Decrement the counter</button>
        <button onClick={incrementCounter}>Increment the counter</button>
        
      </div>
    );
  };

  export default Counter;