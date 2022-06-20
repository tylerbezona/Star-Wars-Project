import styled from "styled-components";
import { colors } from "./Global.variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  /* background-image: url("https://i.ytimg.com/vi/bdiPglJs4H0/maxresdefault.jpg"); */
  background-position: -200px;

  background-size: 2300px;
  /* background-repeat: no-repeat; */
`;

export const LightDarkButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 25px 25px;
  width: 150px;
  padding: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  transition: 700ms;
  background-color: rgba(255, 255, 255, 0.3);
  letter-spacing: 5px;
  text-align: center;

  &:hover {
    /* background-color: rgba(255, 255, 255, 1); */

    color: #fff;
  }

  &:active {
    transition: 200ms;
    transform: scale(0.89);
  }

  /* &:before {
    transform: scale(0.7);
  } */

  .theme-text {
    display: flex;
    justify-content: center;
  }
`;
