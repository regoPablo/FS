/*
 ******************************************
 * Ejercicio 2.11 - 2.14
 ******************************************
 */

import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState([]);

  const apiConfig = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lat: country.latlng[0],
    lng: country.latlng[1],
    unit: "metric",
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${apiConfig.lat}&lon=${apiConfig.lng}&units=${apiConfig.unit}&appid=${apiConfig.key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  console.log(weather);

  return (
    <>
      {weather.main ? (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature: {weather.main.temp}º Celsius</p>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p>Wind speed: {weather.wind.speed} m/s</p>
        </div>
      ) : null}
    </>
  );
};

const CountryData = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>
        <strong>Languages:</strong>
      </p>
      <ul>
        {Object.entries(country.languages).map((lang) => {
          return <li key={lang[0]}>{lang[1]}</li>;
        })}
      </ul>
      <img src={country.flags.png} />
      <Weather country={country} />
    </div>
  );
};

const Countries = ({ countriesToShow, setCountriesToShow }) => {
  if (countriesToShow.length === 1) return null;

  return (
    <div>
      {countriesToShow.map((country) => {
        return (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => setCountriesToShow([country])}>show</button>{" "}
          </p>
        );
      })}
    </div>
  );
};

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    const search = event.target.value;
    setFilter(search);

    setCountriesToShow(
      countries.filter((country) => {
        return country.name.common.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };

  return (
    <div>
      <div>
        Find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      {countriesToShow.length === 1 ? (
        <CountryData country={countriesToShow[0]} />
      ) : null}
      {countriesToShow.length > 10 ? (
        <p>To many matches specify another filter</p>
      ) : (
        <Countries
          countriesToShow={countriesToShow}
          setCountriesToShow={setCountriesToShow}
        />
      )}
    </div>
  );
};

export default App;
