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
