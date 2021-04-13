import List from "../component/List";

const ingredientsURL =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const Ingredients = () => (
  <>
    <List url={ingredientsURL} type="meals" />
  </>
);

export default Ingredients;
