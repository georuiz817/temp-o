import React from "react";
import AlgoliaPlaces from "algolia-places-react";

export default ({ setZip, fetchData, setCountryCode, setLat, setLng }) => {
  const appId = process.env.REACT_APP_APP_ID;
  const apiKey = process.env.REACT_APP_ALGOLIA_API_KEY;

  return (
    <AlgoliaPlaces
      placeholder="Where are you?"
      options={{
        appId: appId,
        apiKey: apiKey,
        type: "city",
        // Other options from https://community.algolia.com/places/documentation.html#options
      }}
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
        console.log(
          suggestion,
          "Fired when suggestion selected in the dropdown or hint was validated."
        );
        setZip(suggestion.postcode);
        setCountryCode(suggestion.countryCode);
        console.log(suggestion.postcode);
      }}
      onSuggestions={({ rawAnswer, query, suggestions }) =>
        console.log(
          "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed."
        )
      }
      onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
        console.log("Fired when arrows keys are used to navigate suggestions.")
      }
      onClear={() => console.log("Fired when the input is cleared.")}
      onLimit={({ message }) =>
        console.log("Fired when you reached your current rate limit.")
      }
      onError={({ message }) =>
        console.log(
          "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
        )
      }
    />
  );
};