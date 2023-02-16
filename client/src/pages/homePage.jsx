import React from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import ShopSection from "../components/common/homeComponents/shopSection";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <Footer />
    </div>
  );
};

export default HomeScreen;
