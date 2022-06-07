// const CardSide = css`
//   color: greenyellow;
//   width: 300px;
//   min-width: 300px;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   backface-visibility: hidden;
//   -moz-backface-visibility: hidden;
//   -webkit-backface-visibility: hidden;
//   border: 2px solid greenyellow;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* justify-content: space-between; */
//   transition: z-index 500ms, transform 500ms;
//   z-index: 0;
//   perspective: 1000px;
//   transform-style: preserve-3d;

//   &.flipped {
//     z-index: 1;
//   }
// `;

// const CardImage = styled.img`
//   width: auto;
//   height: 500px;
//   z-index: 0;
// `;

// const CardFront = styled.div`
//   ${CardSide}
//   z-index: 0;
// `;

// const CardBack = styled.div`
//   ${CardSide}
//   transform: rotateY(180deg) translate(100%, 0);
//   background-color: #d7d7d7;
//   z-index: 1;
// `;

// const CardInner = styled.div`
//   flex: 1;
//   display: flex;

//   transition: transform 500ms;
//   transform-style: preserve-3d;

//   &.flipped {
//     transform: rotateY(-180deg);
//   }
// `;

// const CardButton = styled.button`
//   display: block;
//   position: relative;
//   margin: 0.5em 0;
//   padding: 0.8em 2.2em;
//   cursor: pointer;

//   background: #ffffff;
//   border: none;
//   border-radius: 0.4em;

//   text-transform: uppercase;
//   font-size: 1.4em;
//   font-family: "Work Sans", sans-serif;
//   font-weight: 500;
//   letter-spacing: 0.04em;
// `;
