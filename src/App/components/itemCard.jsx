import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pagination from "./pagination";
// import Filtration from "./filtration/filtration";
import { paginate } from "../utils/paginate";
import SortBar from "./filtration/sortBar";
import CategoriesList from "./filtration/categotiresList";
import { ITEMS_URL } from "../utils/constants/itemsUrl";
import { fetchData } from "../utils/fetchData";

const ItemCard = ({ items, onAdd }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [itemsInSelectedCategory, setItemsInSelectedCategory] = useState();
  // const [sortItems, setSortItems] = useState();
  const pageSize = 2;
  const [testPage, setTestPage] = useState(() => {
    const res = fetchData(`${ITEMS_URL}?_page=${1}&_limit=${pageSize}`);
    res.then((data) => setTestPage(data));
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const forUniqItems = [];
  items.map((item) => forUniqItems.push(item.brand));
  const uniqBrands = Array.from(new Set(forUniqItems));

  const handlePageChange = (page) => {
    console.log("page", page);
    const res = fetchData(`${ITEMS_URL}?_page=${page}&_limit=${pageSize}`);
    res.then((data) => setTestPage(data));
    setCurrentPage(page);
    console.log(testPage, "testPage");
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const res = fetchData(`${ITEMS_URL}?brand=${category}`);
    res.then((data) => setItemsInSelectedCategory(data));
  };

  const userCrop = paginate(
    itemsInSelectedCategory || items,
    currentPage,
    pageSize
  );

  const itemsArrayCount = itemsInSelectedCategory
    ? itemsInSelectedCategory.length
    : items.length;

  const handleClearFilter = () => {
    setItemsInSelectedCategory(items);
    setSelectedCategory();
  };

  const handleSortItems = (order) => {
    order === "asc" ? console.log("asc", order) : console.log("desc", order);
  };

  return (
    <div className="m-4">
      <h1>Беспроводные наушники</h1>
      <div
        style={{
          display: "flex",
          marginBottom: "30px",
          maxWidth: "1200px",
          justifyContent: "space-between"
        }}
      >
        <CategoriesList
          uniqBrands={uniqBrands}
          selectedCategory={selectedCategory}
          onSelectCatagory={handleSelectCategory}
        />
        {selectedCategory && (
          <button className="btn" onClick={handleClearFilter}>
            Сброс
          </button>
        )}
        <SortBar handleSortItems={handleSortItems} />
      </div>
      <div className="col-md-12">
        <div
          className="card-group row row-cols-4 g-0"
          style={{ maxWidth: "1200px" }}
        >
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
                        Курьером до {items.delivery}
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
        </div>
        <Pagination
          itemsArrayCount={itemsArrayCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  items: PropTypes.array,
  onAdd: PropTypes.func
};

export default ItemCard;
