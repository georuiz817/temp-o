import React, { useState, useEffect } from "react";
import WeatherIcons from "../functions-and-arrays/WeatherIcons";
import TunesArray from "../functions-and-arrays/TunesArray";
//import ReactAnimatedEllipsis from "react-animated-ellipsis";
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

const WeatherDetails = ({ history }) => {
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
    let isoaltedSongs = getTunesObject[0];
    var randomIndex = Math.floor(Math.random() * isoaltedSongs.length);
    var randomIndex2 = Math.floor(Math.random() * isoaltedSongs.length);
    var randomElement1 = isoaltedSongs[randomIndex];
    var randomElement2 = isoaltedSongs[randomIndex2];
    document.getElementById("iframe-1").setAttribute("src", randomElement1);
    document.getElementById("iframe-2").setAttribute("src", randomElement2);
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
          <WeatherImg>loading</WeatherImg>
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
          <Icon>+</Icon>
        </TouchableButton>
      </Container>
      <MusicContainer>
        <iframe
          id="iframe-1"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="iframe"
        ></iframe>

        <iframe
          id="iframe-2"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="iframe2"
        ></iframe>
      </MusicContainer>
    </MainContainer>
  ) : null;
};

export default WeatherDetails;
