import React, { useState, useEffect, useRef } from "react";

function TimerRef() {
  const timerRef = useRef();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
     timerRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={()=>clearInterval(timerRef.current)}>click</button>
      <div>Timer- {timer}</div>
    </div>
  );
}

export default TimerRef;
