import { Route, Switch, Redirect } from "react-router-dom";
import Breadcrumbs from "./App/components/breadcrumbs";
import Header from "./App/components/header";
import ItemsList from "./App/components/itemsList";
import About from "./App/layouts/about";
import Home from "./App/layouts/home";


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
