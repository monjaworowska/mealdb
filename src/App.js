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
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/categories" />} />
          <Route path="/categories" component={Categories} />
          <Route path="/countries" component={Areas} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/find" component={Find} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
