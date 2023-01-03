import React from "react";
import CategoriesList from "./categotiresList";
import SortBar from "./sortBar";

const Filtration = () => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "30px",
        maxWidth: "1200px",
        textAlign: "end",
        justifyContent: "space-between"
      }}
    >
      <CategoriesList />
      <SortBar />
    </div>
  );
};

export default Filtration;
