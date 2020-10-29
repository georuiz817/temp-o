import React from "react";

import AlgoliaPlaces from "./AlgoliaPlaces";

import {
  Container,
  Title,
  OuterLocationSearch,
  LocationForm,
  Helper,
} from "./SearchWeather.styles";

const SearchWeather = ({setZip, fetchData, setCountryCode }) => {
  return (
    <Container>
      <h1 style={{color: "black"}}>Website currently under construction for a few days (10/29/2020)</h1>
      <Title>Temp(o)</Title>
      <OuterLocationSearch>
        <LocationForm onSubmit={fetchData}>
          <AlgoliaPlaces  setCountryCode={setCountryCode} setZip={setZip} fetchData={fetchData} />
          <Helper>Zip Code or City Name</Helper>
        </LocationForm>
      </OuterLocationSearch>
    </Container>
  );
};

export default SearchWeather;
