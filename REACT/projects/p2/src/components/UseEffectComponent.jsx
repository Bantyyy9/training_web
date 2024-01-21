import React, { useEffect, useRef, useState } from "react";

const UseEffectComponent = () => {
  const inputRef = useRef();
  const [show, setShow] = useState(true);
  console.log("Testing");
  //   useEffect(() => {}); //will all run anytime the component change
  //   useEffect(() => {}, []); //will only the first the component mounted
  //   useEffect(() => {}, [state]); //will only the first the component mounted or when the state change

  const toggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-8 my-16">
      {show ? <p>UseEffectComponent</p> : null}
      <button
        className="px-5 py-3 text-red-200 bg-red-500 cursor-pointer"
        onClick={toggle}
      >
        {show ? "Hide" : "Show"}
      </button>
      <input ref={inputRef} className="hidden" type="file" name="" id="" />
    </div>
  );
};

export default UseEffectComponent;
