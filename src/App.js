import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./component/Nav";
import Areas from "./view/Areas";
import Categories from "./view/Categories";
import Find from "./view/Find";
import Ingredients from "./view/Ingredients";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/categories" />} />
        <Route path="/categories" component={Categories} />
        <Route path="/countries" component={Areas} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/find" component={Find} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
