import React, { useRef } from "react";

const Form = () => {
  const focusPoint = useRef(null);
  const handleClick = () => {
    focusPoint.current.focus();
  };

  return (
    <>
      <div>
        <input type="email" placeholder="Enter Your Email" ref={focusPoint} />
        <button onClick={handleClick}>
          CLICK HERE TO FOCUS ON THE INPUT BOX
        </button>
      </div>
    </>
  );
};

export default Form;
