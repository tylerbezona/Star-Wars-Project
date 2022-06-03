import React, { useState } from "react";
import styled, { css } from "styled-components";
import FilmList from "./FilmList";
import { characterToProfileImage } from "../styles/Global.variables";
// import { CharacterBackground } from "../styles/Characters.Styled";

const Characters = ({ characters, loading }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <div>
        <div className="loading">{loading && <h1>Loading...</h1>}</div>
        <CardContainer>
          {characters.map((character, results) => {
            return (
              <CardInner key={results} className={flipped ? "flipped" : ""}>
                <CardFront>
                  {character.name}
                  <button onClick={() => setFlipped(true)}>
                    Click for details!
                  </button>
                </CardFront>
                <CardBack>
                  {character.height}
                  <button onClick={() => setFlipped(false)}>WHOMEGALUL</button>
                </CardBack>
              </CardInner>
            );
          })}
        </CardContainer>
      </div>
    </>
  );
};

export default Characters;

const CardSide = css`
  color: greenyellow;
  width: 150%;
  min-width: 150%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border: 2px solid greenyellow;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  perspective: 1000px;
  transform-style: preserve-3d;

  &.flipped {
    z-index: 1;
  }
`;

const CardFront = styled.div`
  ${CardSide}
  display: flex;

  z-index: 0;
  background: url("https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/6He1Adg1iwCnzIu2Kpur3tGe9LL7N5.jpg?q=50&fit=contain&w=767&h=&dpr=1.5");
  background-position: center;
`;

const CardBack = styled.div`
  ${CardSide}
  transform: rotateY(-180deg) translate(100%, 0);
  background-color: #d7d7d7;
  z-index: 1;
`;

const CardInner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;
