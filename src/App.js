import React, { useState, useEffect } from "react";
import { Container } from "./styles/Container.styled";
import Characters from "./components/Characters";
import FilmList from "./components/FilmList";
import Pagination from "./components/pagination";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charPerPage, setCharPerPage] = useState(1);

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

  // Get current characters
  const indexOfLastCharacter = currentPage * charPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Characters characters={currentCharacters} loading={loading} />
        <Pagination
          charPerPage={charPerPage}
          totalCharacters={characters.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}
/**
 * [{},{},{}].slice(0, 1)
 * [{}].map()
 */
