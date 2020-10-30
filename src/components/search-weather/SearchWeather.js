import React from "react";

import AlgoliaPlaces from "./AlgoliaPlaces";

import {
  Container,
  Title,
  OuterLocationSearch,
  LocationForm,
  Helper,
  ErrorMsg,
  SearchBtn,
} from "./SearchWeather.styles";
 

const SearchWeather = ({ setZip, fetchData, setCountryCode, error }) => {
  return (
    <Container>
      <Title>Temp(o)</Title>
      <OuterLocationSearch>
        <LocationForm onSubmit={fetchData}>
          <AlgoliaPlaces
            setCountryCode={setCountryCode}
            setZip={setZip}
            fetchData={fetchData}
          />
          <Helper>
            {error ? (
              <ErrorMsg>Selected location not avaliable</ErrorMsg>
            ) : (
              "Zip Code or City Name"
            )}
          </Helper>
          <SearchBtn type="submit">Submit</SearchBtn>
        </LocationForm>
      </OuterLocationSearch>
    </Container>
  );
};

export default SearchWeather;
