import React, { useEffect, useRef } from "react";

function InputRef() {
  const InputRef = useRef(null);

  useEffect(() => {
    console.log('ref value', InputRef.current);
    InputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={InputRef} type="text" />
    </div>
  );
}

export default InputRef;
