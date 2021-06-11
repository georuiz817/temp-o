import React from "react";
import WeatherIcons from "../functions-and-arrays/WeatherIcons";

import { tempConvert } from "../functions-and-arrays/Functions";

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
} from "../weather-details/WeatherDetails.styles";

export default function WeatherContainer({
  degreeType,
  setDegreeType,
  weatherData,
}) {
  return (
    <Container>
      <WeatherImg>
        <img
          src={WeatherIcons.main[weatherData.weather[0].main]}
          alt="fdafda"
          width="50%"
        />
      </WeatherImg>
      <Title>{weatherData.name}</Title>
      <Temp>
        {degreeType ? (
          <span>{tempConvert(weatherData.main.temp)}°</span>
        ) : (
          <span>{Math.round(weatherData.main.temp)}°</span>
        )}
      </Temp>
      <Desc>{weatherData.weather[0].main}</Desc>
      <AltContainer>
        <AltTemps>
          <AltTitle>hi</AltTitle>
          <AltNum>
            {degreeType
              ? tempConvert(weatherData.main.temp_max)
              : Math.round(weatherData.main.temp_max)}
          </AltNum>
        </AltTemps>
        <AltTemps>
          <AltTitle>low</AltTitle>
          <AltNum>
            {degreeType
              ? tempConvert(weatherData.main.temp_min)
              : Math.round(weatherData.main.temp_min)}
          </AltNum>
        </AltTemps>
      </AltContainer>
      {!degreeType ? (
        <h2
          onClick={() => {
            setDegreeType(true);
          }}
        >
          <span className='current-degree'>F</span> | <span className="alt-degree">C</span>
        </h2>
      ) : (
        <h2
          onClick={() => {
            setDegreeType(false);
          }}
        >
          <span  className='current-degree'> C</span> | <span className="alt-degree">F</span>
        </h2>
      )}
    </Container>
  );
}
