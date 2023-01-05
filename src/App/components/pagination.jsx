import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({
  itemsArrayCount,
  pageSize,
  currentPage,
  onPageChange
}) => {
  const pageCount = Math.ceil(itemsArrayCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <div className="row">
      <nav className="m-4">
        <ul className="pagination">
          {itemsArrayCount > 0 &&
            pages.map((page) => {
              return (
                <li
                  key={page}
                  className={
                    "page-item" + (page === currentPage ? " active" : "")
                  }
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsArrayCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default Pagination;
