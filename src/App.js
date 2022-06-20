import React, { useState, useEffect } from "react";
import { Container, LightDarkButton } from "./styles/Container.styled";
import Characters from "./components/Characters";
import FilmList from "./components/FilmList";
import Pagination from "./components/pagination";
import { reset } from "styled-reset";
import Header from "./components/header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";

import axios from "axios";

//
export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charPerPage, setCharPerPage] = useState(2);
  const [theme, setTheme] = useState("Jedi");

  const fetchCharacters = async () => {
    setLoading(true);
    const response = await axios.get("https://swapi.dev/api/people/");
    setCharacters(response.data.results);
    setLoading(false);
  };
  console.log(characters);

  useEffect(() => {
    fetchCharacters();
  }, []);

  // Light and dark mode
  const themeToggler = () => {
    theme === "Jedi" ? setTheme("Sith") : setTheme("Jedi");
  };

  // Get current characters
  const indexOfLastCharacter = currentPage * charPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // <ThemeProvider theme={themes[theme]}>
    <ThemeProvider theme={theme === "Jedi" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <LightDarkButton
          onClick={() => {
            themeToggler();
          }}
        >
          <div>
            <div className="theme-text"> {theme.toUpperCase()} </div>
          </div>
        </LightDarkButton>
        <Header />
        <Characters characters={currentCharacters} loading={loading} />
        <Pagination
          charPerPage={charPerPage}
          totalCharacters={characters.length}
          paginate={paginate}
        />
      </Container>
    </ThemeProvider>
  );
}
