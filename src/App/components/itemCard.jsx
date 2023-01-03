import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import Filtration from "./filtration/filtration";

const ItemCard = ({ items, onAdd }) => {
  return (
    <div className="m-4">
      <h1>Беспроводные наушники</h1>
      <Filtration />
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
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to={`/catalog/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </h5>
                  <p
                    className="card-text"
                    style={{ textDecoration: "line-through" }}
                  >
                    {item.price} ₽
                  </p>
                  <p className="card-text">{item.newPrice} ₽</p>
                  <p className="card-text">
                    <small className="text-muted">Курьером 28 декабря</small>
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={() => onAdd(item.id)}
                  >
                    В корзину
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <Pagination />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  items: PropTypes.array,
  onAdd: PropTypes.func.isRequired
};

export default ItemCard;
