import React, { useState } from "react";
import { fetchData } from "../functions-and-arrays/Functions";
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

const SearchWeather = ({ history }) => {
  const [zip, setZip] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState(false);

  return (
    <Container>
      <Title>Temp(o)</Title>
      <OuterLocationSearch>
        <LocationForm
          onSubmit={(e) =>
            fetchData(e, zip, countryCode, setZip, setError, history)
          }
        >
          <AlgoliaPlaces setCountryCode={setCountryCode} setZip={setZip} />
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
