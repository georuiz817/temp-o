import React from "react";
import { TextField } from "@material-ui/core";

import {
  Container,
  Title,
  OuterLocationSearch,
  LocationForm,
} from "./SearchWeather.styles";

const SearchWeather = ({ setCity, fetchData }) => {
  return (
    <Container >
      <Title>Temp(o)</Title>
      <OuterLocationSearch>
        <LocationForm onSubmit={fetchData} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            helperText="State or City Name"
            label="Location"
            placeholder="Where are you?"
            variant="outlined"
            required
            fullWidth
            onChange={(e) => setCity(e.target.value)}
          />
        </LocationForm>
      </OuterLocationSearch>
    </Container>
  );
};

export default SearchWeather;
