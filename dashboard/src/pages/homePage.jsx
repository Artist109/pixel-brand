import React from "react";
import Header from "../components/common/header";
import Main from "../components/ui/Home/main";
import Sidebar from "../components/common/sidebar";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};

export default HomeScreen;
