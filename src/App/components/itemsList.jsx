import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import { ITEMS_URL } from "../utils/constants/itemsUrl";
import { fetchData } from "../utils/fetchData";
import { paginate } from "../utils/paginate";
import _ from "lodash";

import Pagination from "./pagination";
import SortBar from "./filtration/sortBar";
import CategoriesList from "./filtration/categotiresList";
import ItemCard from "./itemCard";

const ItemList = ({ items, onAdd, match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [itemsInSelectedCategory, setItemsInSelectedCategory] = useState();
  const [sortedBy, setSortedBy] = useState({
    iter: "price",
    order: "asc"
  });
  const pageSize = 2;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const forUniqItems = [];
  items.map((item) => forUniqItems.push(item.brand));
  const uniqBrands = Array.from(new Set(forUniqItems));

  const handlePageChange = (page) => {
    console.log("page", page);
    setCurrentPage(page);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const res = fetchData(`${ITEMS_URL}?brand=${category}`);
    res.then((data) => setItemsInSelectedCategory(data));
  };

  const handleSortItems = (order) => {
    setSortedBy({ iter: "price", order: order });
  };

  const itemsArrayCount = itemsInSelectedCategory
    ? itemsInSelectedCategory.length
    : items.length;

  const sortedItems = _.orderBy(
    itemsInSelectedCategory || items,
    [sortedBy.iter],
    [sortedBy.order]
  );

  const userCrop = paginate(sortedItems, currentPage, pageSize);

  const handleClearFilter = () => {
    setItemsInSelectedCategory(items);
    setSelectedCategory();
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
          <ItemCard userCrop={userCrop} onAdd={onAdd} />
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

ItemList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.string
    })
  }),
  items: PropTypes.array,
  onAdd: PropTypes.func
};

export default ItemList;
