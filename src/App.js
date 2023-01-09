import "./App.css";
import { useState, useEffect } from "react";
import Country from "./components/country/Country";
import Added from "./components/added/Added";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  const [addedCountry, setAddedCountry] = useState([]);
  const addButtonHandler = (country) => {
    const newAddedCountry = [...addedCountry,country];
    setAddedCountry(newAddedCountry);
  };
  return (
    <div className="App">
      <h1>COUNTRY: {countries.length}</h1>
      <Added country={addedCountry}></Added>
      <ol>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} addButtonHandler={addButtonHandler}></Country>
        ))}
      </ol>
    </div>
  );
}
export default App;
