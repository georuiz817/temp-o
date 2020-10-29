import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchWeather from "./components/search-weather/SearchWeather";
import WeatherDetails from "./components/weather-details/WeatherDetails";

function App() {
  const [zip, setZip] = useState("");
  const [countryCode, setCountryCode] = useState("");
  let history = useHistory();
  const api_key = process.env.REACT_APP_API_KEY;
  
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let data = await (
        await fetch(
          `https:/api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${api_key}&units=imperial
          `
        )
      ).json();
      if (data.cod === 200) {
        localStorage.setItem("storedData", JSON.stringify(data));
        setZip("");
        history.push("/weatherDetails");
      } else {
        alert("location not found!");
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
          />
        )}
      />
      <Route
        exact
        path="/weatherDetails"
        render={(routerProps) => (
          <WeatherDetails {...routerProps} history={history} />
        )}
      />
    </Switch>
  );
}

export default App;
