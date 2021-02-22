import styled from "styled-components";



export const MusicContainerDiv = styled.div`
  grid-row-start: 1;
  padding: 0 5% 5% 5%;
  
  @media screen and (max-width: 650px) {
    margin-bottom: 5%;
    padding: 0 0 0 0 ;
    grid-col-start: 1;
    grid-row-start: 2;
  }
`;