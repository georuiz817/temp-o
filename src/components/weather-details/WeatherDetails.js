import React, { useState, useEffect } from "react";
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
  TouchableButton,
  Icon,
  AltContainer,
  WeatherImg,
  MainContainer,
  MusicContainer,
} from "./WeatherDetails.styles";

const WeatherDetails = ({ history, TunesArray}) => {
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
      grabAndMountSongs();
    }
  });

  let grabAndMountSongs = () => {
    let getTunesObject = TunesArray.filter((obj) =>
      obj.name.includes(weatherData.weather[0].main)
    ).map((i) => i.songs);
    let isolatedSongs = getTunesObject[0].sort(() => Math.random() - 0.5);
    let a = isolatedSongs[0];
    let b = isolatedSongs[1];
    document.getElementById("iframe-1").setAttribute("src", a);
    document.getElementById("iframe-2").setAttribute("src", b);
  };

  return weatherData ? (
    <MainContainer>
      <Container>
        {weatherData.weather[0].main ? (
          <WeatherImg>
            <img
              src={WeatherIcons.main[weatherData.weather[0].main]}
              alt="fdafda"
              width="50%"
            />
          </WeatherImg>
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
        <TouchableButton
          onClick={() => {
            history.push("/");
            localStorage.clear();
          }}
        >
          <Icon>←</Icon>
        </TouchableButton>
      </Container>
      <MusicContainer>
        <Title>Todays tempo:</Title>
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
        <button onClick={() =>{grabAndMountSongs()}}>Random</button>
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
