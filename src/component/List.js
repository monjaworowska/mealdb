import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import Item from "./Item";

class List extends React.Component {
  state = { data: [], sites: 0, site: 0, type: this.props.type };
  componentDidMount() {
    fetch(this.props.url).then((response) =>
      response.json().then((data) =>
        this.setState({
          data: data[this.state.type],
          sites: Math.floor(data[this.state.type].length / 10),
        })
      )
    );
  }
  render() {
    const { site, sites, type } = this.state;
    const data = this.state.data.slice(site * 10, site * 10 + 10);
    return (
      <>
        <div className="pagination is-centered is-small">
          <ul className="pagination-list"></ul>
          {Array(sites)
            .fill(1)
            .map((el, i) => (
              <li
                className={cx(
                  "pagination-link",
                  site === i ? "is-current" : null
                )}
                key={i}
                onClick={() => this.setState({ site: i })}
              >
                {i + 1}
              </li>
            ))}
        </div>
        <div className="columns is-multiline mt-1">
          {type === "categories"
            ? data.map((category) => (
                <NavLink
                  className="column is-one-third"
                  to={"/category/" + category.strCategory}
                  key={category.idCategory}
                >
                  <Item
                    title={category.strCategory}
                    imgURL={category.strCategoryThumb}
                  />
                </NavLink>
              ))
            : type === "meals"
            ? data.map((meal) => (
                <NavLink
                  className="column is-one-quarter"
                  to={"/meal/" + meal.strMeal}
                  key={meal.idMeal}
                >
                  <Item title={meal.strMeal} imgURL={meal.strMealThumb} />
                </NavLink>
              ))
            : null}
        </div>
      </>
    );
  }
}
export default List;
