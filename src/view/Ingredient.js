import List from "../component/List";

const ingredientURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const Ingredient = (props) => {
  const ingredient = props.match.params.ingredient;
  return (
    <>
      <List url={ingredientURL + ingredient} type="meals" />
    </>
  );
};

export default Ingredient;
