import React from "react";
import PropTypes from "prop-types";

const CategoriesList = ({ uniqBrands, selectedCategory, onSelectCatagory }) => {
  return (
    <div className="categories">
      {uniqBrands.map((brand) => {
        return (
          <button
            key={brand}
            className={
              "btn category-item" +
              (selectedCategory === brand ? " btn-primary" : "")
            }
            onClick={() => onSelectCatagory(brand)}
          >
            {brand}
          </button>
        );
      })}
    </div>
  );
};

CategoriesList.propTypes = {
  uniqBrands: PropTypes.array,
  selectedCategory: PropTypes.string,
  onSelectCatagory: PropTypes.func
};

export default CategoriesList;
