import List from "../component/List";

const categoryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const Categories = (props) => {
  const category = props.match.params.category;
  return (
    <>
      <List url={categoryURL + category} type="meals" />
    </>
  );
};

export default Categories;
