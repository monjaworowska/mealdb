import List from "../component/List";

const categoriesURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Categories = () => (
  <>
    <List url={categoriesURL} type="categories" />
  </>
);

export default Categories;
