import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchWeather from "./components/search-weather/SearchWeather";
import WeatherDetails from "./components/weather-details/WeatherDetails";

function App() {
  const [city, setCity] = useState("");
  let history = useHistory();
  const api_key = process.env.REACT_APP_API_KEY;

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let data = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}
          `
        )
      ).json();
      if (data.cod === 200) {
        localStorage.setItem("storedData", JSON.stringify(data));
        setCity("");
        history.push("/weatherDetails");
      } else {
        alert("location not found!");
      }
    } catch (err) {
      console.log("error!!!!!!!!!!!!!!!!!!!!");
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
            setCity={setCity}
            fetchData={fetchData}
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
