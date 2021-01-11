import React, { useState, useMemo } from "react";

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const counterOneValue = () => {
    setCounterOne(counterOne + 1);
  };

  const counterTwoValue = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={counterOneValue}>
        Counter - {counterOne}
        {isEven ? "Even" : "Odd"}
      </button>
      <button onClick={counterTwoValue}>Counter - {counterTwo}</button>
    </div>
  );
}

export default UseMemo;
