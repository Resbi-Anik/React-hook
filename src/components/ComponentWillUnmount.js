import React, { useEffect, useState } from "react";

function ComponentWillUnmount() {
  const [state, setstate] = useState(true);

  useEffect(() => {
    console.log("Componet is mount");
    return () => {
      console.log("ComponentWillUnmount");
    };
  }, [state]);

  const btnHandler = () => {
    setstate(!state);
  };
  return (
    <div>
      <button onClick={btnHandler}>HookComponentDidMount</button>
      {state}
    </div>
  );
}

export default ComponentWillUnmount;
