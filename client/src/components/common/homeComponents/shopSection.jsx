import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../Redux/Actions/productActions";
import Loading from "../loadingError/loading";
import Message from "../loadingError/error";

const brands = ["Apple", "Xiaomi", "Huawei", "Marshall"];

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  const menu = useMemo(
    () =>
      brands.map((b) => (
        <button
          key={b}
          onClick={() => setBrand(brand === b ? null : b)}
          className={`flex-sm-fill text-sm-center nav-link pointer ${
            brand === b && "active"
          }`}
          aria-current="page"
        >
          {b}
        </button>
      )),
    [brand]
  );

  const memoProducts = useMemo(
    () =>
      products
        .filter((p) => (brand ? p.brand === brand : true))
        .map((product) => (
          <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}>
            <div className="border-product">
              <Link to={`/products/${product._id}`}>
                <div className="shopBack">
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>
              <div className="shoptext">
                <p>
                  <Link to={`/products/${product._id}`}>{product.name}</Link>
                </p>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <h3>${product.price}</h3>
              </div>
            </div>
          </div>
        )),
    [brand, products]
  );

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <nav className="nav nav-pills flex-column flex-sm-row nav-home">
                {menu}
              </nav>
            </div>
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>{memoProducts}</>
                )}

                <Pagination pages={pages} page={page} keyword={keyword || ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
