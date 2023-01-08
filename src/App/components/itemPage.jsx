import React from "react";
import PropTypes from "prop-types";
import ItemCounter from "./itemCounter";
import { Link } from "react-router-dom";

const ItemPage = ({
  match,
  items,
  itemCount,
  itemsInCart,
  onAdd,
  onIncrement,
  onDecrement
}) => {
  const itemId = match.params.itemId;

  if (items) {
    // console.log("items", Array.isArray(items));
    // items.map((item) => console.log(item));
    const getItem = (itemId) => items.find(({ id }) => String(id) === itemId);
    const item = getItem(itemId);
    return (
      <div>
        <div className="row ml-5">
          <div className="col-md-4" style={{ marginLeft: "50px" }}>
            <img
              style={{ width: "350px" }}
              src={item.image}
              alt={item.title}
            ></img>
          </div>
          <div className="col-md-4">
            <div className="row">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>
                Бренд: <span>{item.brand}</span>
              </p>
              <p>
                Цена: <span>{item.price}</span>
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textDecoration: "line-through"
                  }}
                >
                  {" "}
                  {item.oldPrice}
                </span>
              </p>
              <ItemCounter
                {...{
                  id: item.id,
                  itemCount,
                  itemsInCart,
                  onAdd,
                  onIncrement,
                  onDecrement
                }}
              />
              <Link className="btn" to={"/catalog/"}>
                В каталог
              </Link>
            </div>
          </div>
          <div className="col-md-8" style={{ marginLeft: "50px" }}>
            <hr />
            <h3>Характеристики</h3>
            <p>
              Ёмкость батареи: <span>{item.batteryCapacity}</span>
            </p>
            <p>
              Время работы: <span>{item.standbyTime}</span>
            </p>
            <p>
              В режиме разговора: <span>{item.talkTime}</span>
            </p>
            <p>
              В режиме прослушивания: <span>{item.operatingTime}</span>
            </p>
            <p>
              Время зарядки: <span>{item.chargingTime}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return "...loading";
};
ItemPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.string
    })
  }),
  items: PropTypes.array,
  itemsInCart: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onGoToCatalog: PropTypes.func
};

export default ItemPage;
