import React, { useEffect, useState } from "react";

function UseEffecteveryStateChange() {
  const [state, setstate] = useState(true);

  useEffect(() => {
    console.log("HookComponentDidMount");
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

export default UseEffecteveryStateChange;
