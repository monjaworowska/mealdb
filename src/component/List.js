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
          sites: Math.ceil(data[this.state.type].length / 12),
        })
      )
    );
  }
  render() {
    const { site, sites, type } = this.state;
    const data = this.state.data.slice(site * 12, site * 12 + 12);
    console.log(site);
    return (
      <>
        <div className="pagination is-centered is-small">
          {sites > 10 ? (
            <>
              <div
                className="pagination-previous"
                onClick={() =>
                  this.setState((prevState) => ({ site: prevState.site - 1 }))
                }
              >
                Previous
              </div>
              <div
                className="pagination-next"
                onClick={() =>
                  this.setState((prevState) => ({ site: prevState.site + 1 }))
                }
              >
                Next page
              </div>
              <ul className="pagination-list">
                <li
                  className={cx(
                    "pagination-link",
                    site === 0 ? "is-current" : null
                  )}
                  onClick={() => this.setState({ site: 0 })}
                >
                  1
                </li>
                <li className="pagination-ellipsis">&hellip;</li>
                <li
                  className={cx(
                    "pagination-link",
                    site === Math.ceil(sites / 3) - 1 ? "is-current" : null
                  )}
                  onClick={() =>
                    this.setState({ site: Math.ceil(sites / 3) - 1 })
                  }
                >
                  {Math.ceil(sites / 3) - 1}
                </li>
                <li className="pagination-ellipsis">&hellip;</li>
                <li
                  className={cx(
                    "pagination-link",
                    site === Math.ceil(sites / 2) - 1 ? "is-current" : null
                  )}
                  onClick={() =>
                    this.setState({ site: Math.ceil(sites / 2) - 1 })
                  }
                >
                  {Math.ceil(sites / 2) - 1}
                </li>
                <li
                  className={cx(
                    "pagination-link",
                    site === Math.ceil(sites / 2) ? "is-current" : null
                  )}
                  onClick={() => this.setState({ site: Math.ceil(sites / 2) })}
                >
                  {Math.ceil(sites / 2)}
                </li>
                <li
                  className={cx(
                    "pagination-link",
                    site === Math.ceil(sites / 2) + 1 ? "is-current" : null
                  )}
                  onClick={() =>
                    this.setState({ site: Math.ceil(sites / 2) + 1 })
                  }
                >
                  {Math.ceil(sites / 2) + 1}
                </li>
                <li className="pagination-ellipsis">&hellip;</li>
                <li
                  className={cx(
                    "pagination-link",
                    site === Math.ceil(sites / 1.5) + 1 ? "is-current" : null
                  )}
                  onClick={() =>
                    this.setState({ site: Math.ceil(sites / 1.5) + 1 })
                  }
                >
                  {Math.ceil(sites / 1.5) + 1}
                </li>
                <li className="pagination-ellipsis">&hellip;</li>
                <li
                  className={cx(
                    "pagination-link",
                    site === sites - 1 ? "is-current" : null
                  )}
                  onClick={() => this.setState({ site: sites - 1 })}
                >
                  {sites - 1}
                </li>
              </ul>
            </>
          ) : (
            <ul className="pagination-list">
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
            </ul>
          )}
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
                  to={"/meal/" + meal.strMeal || meal.strIngredient}
                  key={meal.idMeal || meal.idIngredient}
                >
                  <Item
                    title={meal.strMeal || meal.strIngredient}
                    imgURL={
                      meal.strMealThumb ||
                      "https://www.themealdb.com/images/ingredients/" +
                        meal.strIngredient +
                        ".png"
                    }
                  />
                </NavLink>
              ))
            : null}
        </div>
      </>
    );
  }
}
export default List;
