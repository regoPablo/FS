import axios from "axios";
import { useEffect, useState } from "react";

const CountryFilter = ({ filterHandler }) => {
  return <input onChange={filterHandler} />;
};

const SelectButton = ({ selectorHandler, text }) => {
  return <button onClick={selectorHandler}>{text}</button>;
};

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <strong>languages:</strong>
      <ul>
        {Object.entries(country.languages).map((language) => {
          return <li key={language[0]}>{language[1]}</li>;
        })}
      </ul>
      <img src={country.flags.png}></img>
    </div>
  );
};

const CountriesInfo = ({ filter, countries }) => {
  const [selectedCountry, setSelected] = useState("");
  let filteredCountries;

  const selectorHandler = (event) => {
    const country = event.target.parentElement.innerText.substring(
      0,
      event.target.parentElement.innerText.length - 4
    );
    setSelected(country);
  };

  if (selectedCountry === "") {
    filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(filter.toLowerCase());
    });
  } else {
    filteredCountries = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(selectedCountry.toLowerCase());
    });
  }

  console.log();

  if (filteredCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }

  if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
    return (
      <div>
        {filteredCountries.map((country) => {
          return (
            <p key={country.name.common}>
              {country.name.common}
              <SelectButton selectorHandler={selectorHandler} text="show" />
            </p>
          );
        })}
      </div>
    );
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return <CountryInfo country={country} />;
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <CountryFilter filterHandler={filterHandler} />
      <CountriesInfo filter={filter} countries={countries} />
    </div>
  );
};

export default App;
