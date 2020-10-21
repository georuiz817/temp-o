import styled from "styled-components";

export const Container = styled.div`
  margin: 10% 5% 5% 5%;
  display: grid;
  @media screen and (max-width: 650px) {
    align-items: center;
    text-align: center;
    margin-top: 25%;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-left: 2%;
`;

export const OuterLocationSearch = styled.div`
  width: 375px;
  max-width: 375px;
  min-width: auto;
  height: 118px;
  max-height: 118px;
  min-height: auto;
  border-radius: 42px;
  align-items: center;
  background-color: #bdcbdb;
  @media screen and (max-width: 650px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const LocationForm = styled.form`
  margin-top: 6%;
  margin-left: 6%;
  margin-right: 6%;
`;
