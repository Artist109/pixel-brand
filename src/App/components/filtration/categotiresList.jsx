import React from "react";
import PropTypes from "prop-types";

const CategoriesList = ({ items, selectedCategory, onSelectCatagory }) => {
  // const forUniqItems = [];
  // items.map((item) => forUniqItems.push(item.brand));
  // const uniqItems = Array.from(new Set(forUniqItems));

  return (
    <div className="categories">
      {items.map((item) => {
        return (
          <button
            key={item.id}
            className={
              "btn category-item" +
              (selectedCategory === item.brand ? " btn-primary" : "")
            }
            onClick={() => onSelectCatagory(item.brand)}
          >
            {item.brand}
            {/* {uniqItems.forEach((item) => {
              console.log("item", typeof item, "item.brand", typeof item);
              return item === item.brand ? item.brand : null;
            })} */}
          </button>
        );
      })}
    </div>
  );
};

CategoriesList.propTypes = {
  items: PropTypes.array,
  selectedCategory: PropTypes.string,
  onSelectCatagory: PropTypes.func
};

export default CategoriesList;
