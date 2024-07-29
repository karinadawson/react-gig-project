import React from "react";
import { useState } from "react";
import userEvent from "@testing-library/user-event"

// a function component that just displays the count
// uses props as placeholder of what it expects to recieve
const CountDisplay = (props) => {
    return <h1>{props.count}</h1>
}


// a function component that gens two buttons and handles what happens to the count
// uses props as placeholder of what it expects to recieve
const CountButton = (props) => {
    const incrementCounter = () => {
        props.setCount(props.count + 1);
        };
    const decrementCounter = () => {
        props.setCount(props.count - 1);
        }
    return (
        <div>
        <button onClick={decrementCounter}>Decrement the counter</button>
        <button onClick={incrementCounter}>Increment the counter</button>
        </div>
        )
    };


// a container component for the 2 functions above
// handles the state
// parent component for the two children
// provides the props count and setCount to the functions expecting them 
    const Counter = () => {
        const [count, setCount] = useState(0);

  
    return (
      <div>
        <h1>Counter:</h1>
        <CountDisplay count={count}/>
        <CountButton setCount={setCount} count={count}/>
        
      </div>
    );
}
  export default Counter;