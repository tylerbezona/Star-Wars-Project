import React from "react";
import styled from "styled-components";

const Pagination = ({ charPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyled>
      <div className="paginate-container">
        {pageNumbers.map((number) => (
          <div key={number}>
            <a
              className="paginate-item"
              onClick={() => paginate(number)}
              href="!#"
            >
              {number}
            </a>
          </div>
        ))}
      </div>
    </PaginationStyled>
  );
};

export default Pagination;

export const PaginationStyled = styled.div`
  .paginate-container {
    background-color: red;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 80px;
    width: 100%;
  }

  /* .paginate-item {
    display: flex;
    justify-content: flex-end;

    border: 1px solid greenyellow;
    text-decoration: none;
    background-color: yellow;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 25px;
    padding: 20px;
  } */
`;
