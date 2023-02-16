import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import AddProductMain from "../components/ui/products/addProductMain";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
