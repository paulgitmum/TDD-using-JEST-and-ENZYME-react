import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => setCount(count + 1);
  const decrementHandler = () => setCount(count - 1);
  return (
    <div>
      <h2>My Counter App</h2>
      <div id="counter-value">{count}</div>

      <button id="increment-btn" onClick={incrementHandler}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
