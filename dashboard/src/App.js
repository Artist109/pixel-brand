import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import AddProduct from "./pages/addProduct";
import Login from "./pages/loginPage";
import ProductEditPage from "./pages/productEditPage";
import NotFound from "./pages/notFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./Redux/Actions/productActions";
import { listOrders } from "./Redux/Actions/orderActions";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomePage} exact />
          <PrivateRouter path="/products" component={ProductPage} />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/product/:id/edit" component={ProductEditPage} />
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
