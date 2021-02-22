import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 10% 0 4%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  margin-top: 1%;
  @media screen and (max-width: 650px) {
    grid-template-columns: 100%;
  }
`;

export const Container = styled.div`
  padding-left: 10%;
  grid-row-start: 1;

  @media screen and (max-width: 650px) {
    margin: 0 0 0 0;
    padding-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 17px;
`;

export const Temp = styled.div`
  font-size: 60px;
  margin-bottom: 8px;
`;

export const Desc = styled.div`
  font-size: 35px;
  margin-bottom: 17px;
`;

export const AltContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-column-gap: 0;
`;

export const AltTemps = styled.div`
  display: grid;
  color: #595959;
`;

export const AltTitle = styled.span`
  font-size: 18px;
  margin-bottom: 3px;
 
`;

export const AltNum = styled.span`
  font-size: 35px;
 
`;

export const WeatherImg = styled.div`
  width: 50%;
  margin-left: -5%;
`;
