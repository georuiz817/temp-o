import styled from "styled-components";

export const Container = styled.div`
  margin: 6% 5% 5% 5%;
  display: grid;
  @media screen and (max-width: 650px) {
    margin: 0;
    margin-top: 25%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-left: 2%;
  @media screen and (max-width: 650px) {
    margin-left: 5%;
  }
`;

export const OuterLocationSearch = styled.div`
  width: 375px;
  min-width: auto;
  height: 100%;
  min-height: auto;
  border-radius: 42px;
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

export const Helper = styled.div`
  margin-top: 3%;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 6%;
  font-size: 10px;
  text-align: left;
  color: white;
`;

export const ErrorMsg = styled.span`
  color: red;
`;

export const SearchBtn = styled.button`
  background: white;
  background-color: white;
  margin-bottom: 6%;
  font-size: 1rem;
  text-align: left;
  border-radius: 15px;
  border: none;
  outline: none;
  color: black;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }

  &:active {
    background-color: #bfbfbf;
  }
`;
