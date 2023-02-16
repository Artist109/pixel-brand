import React from "react";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SingleProduct from "./pages/singleProduct";
import Login from "./pages/login";
import Register from "./pages/register";
import CartPage from "./pages/cartPage";
import ShippingPage from "./pages/shippingPage";
import ProfilePage from "./pages/profilePage";
import PaymentPage from "./pages/paymentPage";
import PlaceOrderPage from "./pages/placeOrderPage";
import OrderPage from "./pages/orderPage";
import NotFound from "./pages/notFound";
import PrivateRouter from "./PrivateRouter";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search/:keyword" component={HomePage} exact />
        <Route path="/page/:pagenumber" component={HomePage} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomePage}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfilePage} />
        <Route path="/cart/:id?" component={CartPage} />
        <PrivateRouter path="/shipping" component={ShippingPage} />
        <PrivateRouter path="/payment" component={PaymentPage} />
        <PrivateRouter path="/placeorder" component={PlaceOrderPage} />
        <PrivateRouter path="/order/:id" component={OrderPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
