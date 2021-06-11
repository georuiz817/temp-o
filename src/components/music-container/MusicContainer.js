import React from "react";
import { MusicContainerDiv } from "./MusicContainer.styles";

export default function MusicContainer() {
  return (
      <MusicContainerDiv>
 <p>Todays tempo</p>
        <iframe
          src=""
          id="iframe-1"
          width="100%"
          height="100%"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="iframe"
        ></iframe>
      </MusicContainerDiv>
  );
}
