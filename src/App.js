import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom"; 
import SearchWeather from "./components/search-weather/SearchWeather";
import WeatherDetails from "./components/weather-details/WeatherDetails";
import TunesArray from "./components/functions-and-arrays/TunesArray";
import NavBar from "./components/navBar/NavBar";

function App() {
  let history = useHistory();

  return (
    <div>
     <NavBar history={history}/>
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => (
          <SearchWeather {...routerProps} history={history} />
        )}
      />
      <Route
        exact
        path="/weatherDetails"
        render={(routerProps) => (
          <WeatherDetails
            {...routerProps}
            TunesArray={TunesArray}
            history={history}
          />
        )}
      />
    </Switch>
    </div>
  );
}

export default App;
