import React from "react";

const SortBar = () => {
  return (
    <div>
      <button className="btn" style={{ marginRight: "10px" }}>
        По возрастанию цены
      </button>
      <button className="btn">По убыванию цены</button>
    </div>
  );
};

export default SortBar;
