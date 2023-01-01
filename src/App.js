import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { fetchData } from "./App/utils/fetchData";
import { ITEMS_URL } from "./App/utils/constants/itemsUrl";

import Breadcrumbs from "./App/components/breadcrumbs";
import Header from "./App/components/header";
import ItemPage from "./App/components/itemPage";
import ItemsList from "./App/components/itemsList";
import About from "./App/layouts/about";
import Home from "./App/layouts/home";

function App() {
  const [items, setItems] = useState();
  const [itemCount, setItemCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    const res = fetchData(ITEMS_URL);
    res.then((data) => setItems(data));
  }, []);

  const handleItemIncrement = () => {
    setItemCount((prev) => (prev += 1));
  };

  const handleItemDecrement = () => {
    if (itemCount >= 1) {
      setItemCount((prev) => (prev -= 1));
    }
  };

  const handleAddToCart = () => {
    if (itemCount === 0) {
      setItemsInCart((prev) => (prev += 1));
    } else {
      setItemsInCart((prev) => (prev += itemCount));
    }
    console.log(itemsInCart);
  };

  return (
    <>
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/catalog/:itemId">
          {(props) => (
            <ItemPage
              {...props}
              items={items}
              itemsInCart={itemsInCart}
              itemCount={itemCount}
              onAdd={handleAddToCart}
              onIncrement={handleItemIncrement}
              onDecrement={handleItemDecrement}
            />
          )}
        </Route>
        <Route path="/catalog/">
          {(props) => (
            <ItemsList
              {...props}
              items={items}
              itemsInCart={itemsInCart}
              onAdd={handleAddToCart}
            />
          )}
        </Route>
        <Route path="/about" component={About}></Route>
        <Redirect to={Home} />
      </Switch>
    </>
  );
}

export default App;
