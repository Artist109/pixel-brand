import { Route, Switch, Redirect } from "react-router-dom";
import About from "./App/components/about";
import Breadcrumbs from "./App/components/breadcrumbs";
import Header from "./App/components/header";
import Home from "./App/components/home";
import ItemsList from "./App/components/itemsList";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route path="/catalog" component={ItemsList}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
