import React from "react";
// import SortBar from "./sortBar";

const CategoriesList = () => {
  return (
    <div className="categories">
      <button className="btn category-item" style={{ marginRight: "10px" }}>
        Xiaomi
      </button>
      <button className="btn category-item">Apple</button>
      <button className="btn category-item">Marshall</button>
      <button className="btn category-item">Sony</button>
      <button className="btn category-item">Huawei</button>
      <button className="btn category-item">Earldom</button>
    </div>
  );
};

export default CategoriesList;
