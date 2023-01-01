import React from "react";
import PropTypes from "prop-types";

const ItemCounter = ({
  id,
  itemCount,
  itemsInCart,
  onAdd,
  onIncrement,
  onDecrement
}) => {
  console.log(
    "id",
    id,
    "itemCount",
    itemCount,
    "itemsInCart",
    itemsInCart,
    "onAdd",
    typeof onAdd,
    "onIncrement",
    onIncrement,
    "onDecrement",
    onDecrement
  );
  if (itemsInCart) {
    return (
      <div className="col">
        <button className="btn btn-primary" onClick={() => onDecrement()}>
          -
        </button>
        <span className="m-4">{itemCount}</span>
        <button className="btn btn-primary" onClick={() => onIncrement()}>
          +
        </button>
      </div>
    );
  } else {
    return (
      <a
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={() => onAdd()}
      >
        В корзину
      </a>
    );
  }
};

ItemCounter.propTypes = {
  id: PropTypes.number,
  itemsInCart: PropTypes.array,
  itemCount: PropTypes.number,
  onAdd: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

export default ItemCounter;
