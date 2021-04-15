import List from "../component/List";

const countryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

const Country = (props) => {
  const country = props.match.params.country;
  return (
    <>
      <List url={countryURL + country} type="meals" />
    </>
  );
};

export default Country;
