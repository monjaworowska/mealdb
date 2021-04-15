import React from "react";
import Item from "../component/Item";
import { NavLink } from "react-router-dom";

const mealURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

class Meal extends React.Component {
  state = { id: this.props.match.params.id, data: [] };
  componentDidMount() {
    fetch(mealURL + this.state.id).then((response) =>
      response.json().then((data) =>
        this.setState({
          data: data["meals"][0],
        })
      )
    );
  }
  render() {
    const { data } = this.state;
    const ingredients = Object.fromEntries(
      Object.entries(data).filter(
        ([key, value]) => key.startsWith("strIngredient") && value
      )
    );
    const doses = Object.fromEntries(
      Object.entries(data).filter(
        ([key, value]) => key.startsWith("strMeasure") && value
      )
    );
    const recipe = Object.fromEntries(
      Object.values(ingredients).map((val, index) => [
        val,
        Object.values(doses)[index],
      ])
    );
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <Item
              title={data.strMeal ? data.strMeal : ""}
              imgURL={data.strMealThumb}
            />
          </div>
          <div className="column">
            {Object.keys(recipe).map((ingredient, i) => (
              <div key={i}>
                <NavLink to={"/ingredient/" + ingredient}>
                  <span style={{ textTransform: "capitalize" }}>
                    {ingredient + " "}
                  </span>
                </NavLink>
                {Object.values(recipe)[i]}
              </div>
            ))}
          </div>
        </div>
        <div>{data.strInstructions}</div>
      </div>
    );
  }
}

export default Meal;
