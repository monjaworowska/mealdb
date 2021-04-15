import List from "../component/List";

const areasURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

const Areas = () => (
  <>
    <List url={areasURL} type="countries" />
  </>
);

export default Areas;
