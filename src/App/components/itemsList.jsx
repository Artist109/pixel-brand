import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Loader from "./loader";
import ItemCard from "./itemCard";

const ItemsList = ({items, onAdd}) => {

  if (items) {
      return <ItemCard items={items} onClick={()=>onAdd}/>
  } else {
    return <Loader/>
  }
};

export default ItemsList;
