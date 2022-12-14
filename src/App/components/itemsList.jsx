import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ItemsList = () => {
  const [items, setItems] = useState();

  const getData = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData("http://localhost:3001/items");
  }, []);

  if (items) {
    return (
      <>
        <div className="m-4">
          <h1>Беспроводные наушники</h1>
          <div
            className="card-group row row-cols-4 g-0"
            style={{ maxWidth: "1200px" }}
          >
            {items.map((item) => {
              return (
                <div key={item.id} className="col">
                  <div
                    key={item.id}
                    className="card h-100 p-3"
                    style={{ maxWidth: "350px", border: "none" }}
                  >
                    <img
                      src={item.image}
                      className="card-img-top mx-auto d-block"
                      alt={item.title}
                      style={{ maxWidth: "200" + "px", maxHeight: "200px" }}
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p
                        className="card-text"
                        style={{ textDecoration: "line-through" }}
                      >
                        {item.price} ₽
                      </p>
                      <p className="card-text">{item["new-price"]} ₽</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Курьером 28 декабря
                        </small>
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
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
  } else {
    return (
      <div className="m-4" style={{ color: "#ccc" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Загрузка...</div>
      </div>
    );
  }
};

export default ItemsList;
