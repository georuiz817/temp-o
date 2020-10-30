import React, { useState} from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchWeather from "./components/search-weather/SearchWeather";
import WeatherDetails from "./components/weather-details/WeatherDetails";
import TunesArray from './components/functions-and-arrays/TunesArray';

function App() {
  const [zip, setZip] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState(false);
  let history = useHistory();
  const api_key = process.env.REACT_APP_API_KEY;

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let data = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${api_key}&units=imperial`
        )
      ).json();
      if (data.cod === 200) {
        localStorage.setItem("storedData", JSON.stringify(data));
        setZip("");
        setError(false)
        history.push("/weatherDetails");
      } else {
        setError(true);
      }
    } catch (err) {
      console.log("error" + err);
    }
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => (
          <SearchWeather
            {...routerProps}
            setZip={setZip}
            fetchData={fetchData}
            setCountryCode={setCountryCode}
            error={error}
          />
        )}
      />
      <Route
        exact
        path="/weatherDetails"
        render={(routerProps) => (
          <WeatherDetails {...routerProps} TunesArray={TunesArray} history={history} />
        )}
      />
    </Switch>
  );
}

export default App;
