import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemCard = ({ userCrop, onAdd }) => {
  return (
    <>
      {userCrop.map((item) => {
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
                  {item.oldPrice} ₽
                </p>
                <p className="card-text">{item.price} ₽</p>
                <p className="card-text">
                  <small className="text-muted">
                    Курьером до {item.delivery}
                  </small>
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
    </>
  );
};

ItemCard.propTypes = {
  userCrop: PropTypes.array,
  onAdd: PropTypes.func
};

export default ItemCard;
