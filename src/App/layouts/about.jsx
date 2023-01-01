import React, { useState } from "react";
const About = () => {
  const [count, setCount] = useState(0);

  const formatter = () => {
    return count === 0 ? "empty" : count;
  };

  const handleIncrement = () => {
    setCount((prev) => (prev += 1));
  };

  const handleDecrement = () => {
    setCount((prev) => (prev -= 1));
  };

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <h2>{formatter()}</h2>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default About;
