import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./component/Nav";
import Areas from "./view/Areas";
import Categories from "./view/Categories";
import Category from "./view/Category";
import Ingredients from "./view/Ingredients";
import Ingredient from "./view/Ingredient";
import Country from "./view/Country";
import Meal from "./view/Meal";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/categories" />} />
          <Route
            exact
            path="/mealdb"
            render={() => <Redirect to="/categories" />}
          />
          <Route path="/categories" component={Categories} />
          <Route path="/category/:category" component={Category} />
          <Route path="/countries" component={Areas} />
          <Route path="/country/:country" component={Country} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/ingredient/:ingredient" component={Ingredient} />
          <Route path="/meal/:id" component={Meal} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
