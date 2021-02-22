import React from "react";
import { MusicContainerDiv } from "./MusicContainer.styles";

export default function MusicContainer() {
  return (
      <MusicContainerDiv>
        <h1>♫</h1>
        <iframe
          src=""
          id="iframe-1"
          width="100%"
          height="232"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="iframe"
        ></iframe>
        <iframe
          src=""
          id="iframe-2"
          width="100%"
          height="232"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="iframe"
        ></iframe>
      </MusicContainerDiv>
  );
}
