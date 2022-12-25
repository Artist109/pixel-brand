import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { fetchData } from "../utils/fetchData";
import { ITEMS_URL } from "../utils/constants/itemsUrl";

import Item from './item'
import Loader from "./loader";

const ItemsList = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const res = fetchData(ITEMS_URL);
    res.then(data => setItems(data))
  }, [console.log('items', items)]);

  const handleAddToCart =(id) => {
    alert(`Id товара: ${id}`)
  }

  if (items) {
      return <Item items={items} onAdd={handleAddToCart}/>
  } else {
    return <Loader/>
  }
};

export default ItemsList;
