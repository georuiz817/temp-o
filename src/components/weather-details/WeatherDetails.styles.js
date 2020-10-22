import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 50%; 50%;
  grid-template-rows: auto;
  margin-top: 5%;
  @media screen and (max-width: 650px) {
    grid-template-columns: 100%; 100%;
  }
`;

export const Container = styled.div`
  padding-left: 10%;
  grid-col-start: 1;
  grid-row-start: 1;
  margin: 0 5% 5% 5%;
  display: grid;
  width: 100%;
  @media screen and (max-width: 650px) {
    padding-left: 0;
    width: 100%;
  }
`;

export const MusicContainer = styled.div`
  grid-col-start: 2;
  grid-row-start: 1;
  padding: 5%;
  margin-top: auto;
  @media screen and (max-width: 650px) {
    grid-col-start: 1;
    grid-row-start: 2;
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
  display: inline-block;
`;

export const AltTemps = styled.div`
  display: inline-block;
  color: #595959;
`;

export const AltTitle = styled.span`
  font-size: 18px;
  margin-bottom: 3px;
  display: inline-block;
  margin-right: 5%;
`;

export const AltNum = styled.span`
  font-size: 35px;
  margin-right: 20%;
`;

export const TouchableButton = styled.div`
  width: 56px;
  height: 56px;
  background-color: white;
  padding: 5px;
  border-radius: 100px;
  backdrop-filter: blur(30px);
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  justify-self: center;
  @media screen and (max-width: 650px) {
    justify-self: end;
    margin-right: 10%;
  }
  &:hover{
    background-color: #D3D3D3	 ;  
  }
  
  &:active {
    background-color: #bfbfbf;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const WeatherImg = styled.div`
  width: 40%;
  margin-left: -5%;
`;