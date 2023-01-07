import React from "react";
import PropTypes from "prop-types";

const SortBar = ({ handleSortItems }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ marginRight: "10px" }}
        onClick={() => handleSortItems("asc")}
      >
        По возрастанию цены
      </button>
      <button className="btn" onClick={() => handleSortItems("desc")}>
        По убыванию цены
      </button>
    </div>
  );
};

SortBar.propTypes = {
  handleSortItems: PropTypes.func
};

export default SortBar;
