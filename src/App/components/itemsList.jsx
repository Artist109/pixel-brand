import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

import Loader from "./loader";
import ItemCard from "./itemCard";

const ItemsList = ({ items, onAdd }) => {
  if (items) {
    return <ItemCard items={items} onClick={() => onAdd} />;
  } else {
    return <Loader />;
  }
};

ItemsList.propTypes = {
  items: PropTypes.array,
  onAdd: PropTypes.func.isRequired
};

export default ItemsList;
