import React, { useState } from "react";
import styled, { css } from "styled-components";
import FilmList from "./FilmList";
import ReactCardFlip from "react-card-flip";
import { characterToProfileImage } from "../styles/Global.variables";
// import { CharacterBackground } from "../styles/Characters.Styled";

function FlipCard({ characters, loading }) {
  const [flip, setFlip] = useState(false);

  return (
    <CardContainer>
      {loading && <h1 className="loading">LOADING...</h1>}
      {characters.map((character, result) => {
        return (
          <Card
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
          >
            <CardFront flip={flip}>
              <CardContent>
                {/* <h1> Front</h1> */}
                <CardImage img={characterToProfileImage[character.name]} />
              </CardContent>
              <BGFade />
            </CardFront>
            <CardBack flip={flip}>
              <CardContent>
                <h1 className="info-name">{character.name} </h1>
                <h2 className="info-text">Height: {character.height}cm </h2>
                <h2 className="info-text">Weight: {character.mass}kg </h2>
                <h2 className="info-text">Gender: {character.gender} </h2>
                <h2 className="info-text">Eye color: {character.eye_color} </h2>
                <h2 className="info-text">
                  Birth year: {character.birth_year}
                </h2>
              </CardContent>
            </CardBack>
          </Card>
        );
      })}
    </CardContainer>
  );
}

export default FlipCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;

  .loading {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 50px;
    font-weight: 900;
    font-family: "Courier New", Courier, monospace;
  }
`;

const Card = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  position: relative;
  flex-basis: 100%;
  max-width: 300px;
  cursor: pointer;

  .info-name {
    font-weight: 650;
    letter-spacing: 5px;
    color: white;
  }

  .info-text {
    display: flex;
    justify-content: space-between;
    margin: 35px 0;
    color: black;
    font-weight: 700;
    font-size: 23px;
  }
`;

const CardTemplate = styled("div")(() => ({
  width: "100%",
  backfaceVisibility: "hidden",
  height: "400px",
  borderRadius: "6px",
  transformStyle: "preserve-3d",
  transition: "transform 2s cubic-bezier(0.8,0.3, 0.3, 1.4)",
}));

const CardFront = styled(CardTemplate)(({ flip }) => ({
  transform: flip ? "rotateY(-180deg)" : "rotateY(0deg)",
}));

const CardBack = styled(CardTemplate)(({ flip }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  borderRadius: "10px",
  background:
    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,81,133,1) 100%)",
  transform: flip ? "rotateY(0deg)" : "rotateY(180deg)",
}));

// const CardImage = styled.img`

//   max-width: 100%;
//   height: unset;

// `;

const CardImage = styled("img")(({ img }) => ({
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "400px",
}));

const CardContent = styled("div")(() => ({
  top: 0,
  position: "absolute",
  left: 0,
  width: "100%",
  backfaceVisibility: "hidden",
  transform: "translateZ(70px) scale(0.90)",
}));

const BGFade = styled("div")(() => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  height: "400px",
  background: "rgba(255, 255, 255, 0.6)",
  borderRadius: "10px",
}));
