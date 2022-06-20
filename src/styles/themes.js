import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const lightTheme = {
  body: "url(https://i.ytimg.com/vi/bdiPglJs4H0/maxresdefault.jpg)",
};

export const darkTheme = {
  body: "url(https://i.ytimg.com/vi/51AkisPBS58/maxresdefault.jpg)",
};

export const GlobalStyles = createGlobalStyle`
${reset}
 body {
  background-image: ${(props) => props.theme.body};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  transition: 2.5s ease-in-out;
  height: 100%;
  overflow: hidden;
 }
`;
