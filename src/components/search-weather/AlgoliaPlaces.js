import React from "react";
import AlgoliaPlaces from "algolia-places-react";

export default ({ setZip, setCountryCode }) => {
  const appId = process.env.REACT_APP_APP_ID;
  const apiKey = process.env.REACT_APP_ALGOLIA_API_KEY;

  return (
    <AlgoliaPlaces
      placeholder="Where are you?"
      options={{
        appId: appId,
        apiKey: apiKey,
        type: "city",
      }}
      onChange={({ suggestion }) => {
        setZip(suggestion.postcode);
        setCountryCode(suggestion.countryCode);
        console.log(suggestion.postcode);
      }}
    />
  );
};
