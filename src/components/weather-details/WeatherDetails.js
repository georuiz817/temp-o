import React, { useState, useEffect } from "react";
import { randomizeSongs } from "../functions-and-arrays/Functions";
import ReactAnimatedEllipsis from "react-animated-ellipsis";
import MusicContainer from "../music-container/MusicContainer";
import WeatherContainer from "../weather-container/WeatherContainer";

import { MainContainer, Desc } from "./WeatherDetails.styles";

const WeatherDetails = ({ history, TunesArray }) => {
  const [weatherData, setWeatherData] = useState("");
  const [degreeType, setDegreeType] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("storedData");
    if (data) {
      setWeatherData(JSON.parse(data));
    } else {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    if (weatherData) {
      randomizeSongs(TunesArray, weatherData);
    }

  },[TunesArray,weatherData]);


  return weatherData ? (
    <MainContainer>
      <WeatherContainer degreeType={degreeType} setDegreeType={setDegreeType}weatherData={weatherData} />
      <MusicContainer />
    </MainContainer>
  ) : (
    <MainContainer>
      <Desc>
        <ReactAnimatedEllipsis fontSize="5rem" spacing="0.3rem" />
      </Desc>
    </MainContainer>
  );
};

export default WeatherDetails;
