import React, { useState } from "react";
import styled, { css } from "styled-components";
import FilmList from "./FilmList";
import { characterToProfileImage } from "../styles/Global.variables";
// import { CharacterBackground } from "../styles/Characters.Styled";

const Characters = ({ characters, loading }) => {
  // const [flipped, setFlipped] = useState(false);
  // className={flipped ? "flipped" : ""}
  // onClick={() => setFlipped(true)}
  // onClick={() => setFlipped(false)}

  return (
    <>
      <div className="loading">{loading && <h1>Loading...</h1>}</div>
      <CardContainer>
        {characters.map((character, results) => {
          return (
            <CardInner key={results}>
              <CardFront>
                <CardImage src={characterToProfileImage[character.name]} />
                {/* <CardButton>Click for details!</CardButton> */}
              </CardFront>
              <CardBack>
                {character.name}
                {character.height}
                {/* <CardButton>WHOMEGALUL</CardButton> */}
              </CardBack>
            </CardInner>
          );
        })}
      </CardContainer>
    </>
  );
};

export default Characters;

const CardSide = css``;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  max-width: 100%;
  perspective: 1000px;

  transform-style: preserve-3d;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;

  &:hover {
    z-index: 1;
  }
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  transition: transform 500ms;
  transform-style: preserve-3d;
  border: 1px solid greenyellow;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardFront = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  z-index: 0;
`;

const CardBack = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  background-color: blue;
  z-index: 1;
  &:hover {
    transform: translateY(-180deg) translate(100%, 0);
  }
`;
