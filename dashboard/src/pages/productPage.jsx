import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import MainProducts from "../components/ui/products/mainProducts";

const ProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
      </main>
    </>
  );
};

export default ProductScreen;
