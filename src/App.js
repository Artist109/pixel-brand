import { Route, Switch, Redirect } from "react-router-dom";
import About from "./App/layouts/about";
import Breadcrumbs from "./App/components/breadcrumbs";
import Header from "./App/components/header";
import Home from "./App/layouts/home";
import ItemsList from "./App/components/itemsList";
import ItemCard from "./App/components/itemCard";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/catalog" component={ItemsList}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect to={Home} />
      </Switch>
    </>
  );
}

export default App;
