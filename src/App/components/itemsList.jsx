import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import api, { fetchItems } from "../api/items";

const ItemsList = () => {
  const [items, setItems] = useState(fetchItems());
  console.log();
  return (
    <>
      <div className="m-4">
        <div className="card-group row row-cols-4 g-0">
          {items.map((item) => {
            return (
              <div class="col">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ maxWidth: "200" + "px", maxHeight: "200px" }}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p
                      className="card-text"
                      style={{ textDecoration: "line-through" }}
                    >
                      {item.price}
                    </p>
                    <p className="card-text">{item["new-price"]}</p>
                    <p className="card-text">
                      <small className="text-muted">Курьером 28 декабря</small>
                    </p>
                    <a href="#" class="btn btn-primary">
                      В корзину
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemsList;
