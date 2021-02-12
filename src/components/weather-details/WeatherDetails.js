import React, { useState, useEffect } from "react";
import { randomizeSongs } from "../functions-and-arrays/Functions";
import WeatherIcons from "../functions-and-arrays/WeatherIcons";
import ReactAnimatedEllipsis from "react-animated-ellipsis";

import {
  Title,
  Temp,
  Container,
  Desc,
  AltTemps,
  AltTitle,
  AltNum,
  AltContainer,
  WeatherImg,
  MainContainer,
  MusicContainer,
} from "./WeatherDetails.styles";

const WeatherDetails = ({ history, TunesArray }) => {
  const [weatherData, setWeatherData] = useState("");

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
  });

  return weatherData ? (
      <MainContainer>
        <Container>
          {weatherData.weather[0].main ? (
            <div>
              <h1>Temp° </h1>
              <WeatherImg>
                <img
                  src={WeatherIcons.main[weatherData.weather[0].main]}
                  alt="fdafda"
                  width="50%"
                />
              </WeatherImg>
            </div>
          ) : (
            <WeatherImg>
              <ReactAnimatedEllipsis fontSize="5rem" spacing="0.3rem" />
            </WeatherImg>
          )}
          <Title>{weatherData.name}</Title>
          <Temp>{weatherData.main.temp}°</Temp>
          <Desc>{weatherData.weather[0].main}</Desc>
          <AltContainer>
            <AltTemps>
              <AltTitle>hi</AltTitle>
              <AltNum>{weatherData.main.temp_max}°</AltNum>
            </AltTemps>
            <AltTemps>
              <AltTitle>low</AltTitle>
              <AltNum>{weatherData.main.temp_min}°</AltNum>
            </AltTemps>
          </AltContainer>
        </Container>
        <MusicContainer>
          <h1>Tempo ♫</h1>
          <iframe
            src=""
            id="iframe-1"
            width="100%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="iframe"
          ></iframe>
          <iframe
            src=""
            id="iframe-2"
            width="100%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="iframe"
          ></iframe>
        </MusicContainer>
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
