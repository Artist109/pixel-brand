import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import EditProductMain from "../components/ui/products/editproductMain";

const ProductEditScreen = ({ match }) => {
  const productId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditScreen;
