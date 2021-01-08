import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const IncrementHandler = () => {
    setCount(count + 1);
  };

  const ResetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      Counter
      <button onClick={IncrementHandler}>Click</button>
      {count}
      <button onClick={ResetHandler}>reset</button>
    </div>
  );
}

export default UseState;
