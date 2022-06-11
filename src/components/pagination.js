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
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 80px;
    width: 100%;
  }

  .paginate-item {
    display: flex;
    justify-content: flex-end;

    /* border: 1px solid greenyellow; */
    color: black;
    text-decoration: none;
    background-color: grey;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
    padding: 20px;
    transition: all ease-in-out 300ms;
    border-radius: 8px;

    &:hover {
      transform: scale(1.1);
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 1) 0%,
        rgba(0, 81, 133, 1) 100%
      );
      color: rgba(255, 255, 255, 1);
      box-shadow: 0 0px 25px rgba(255, 255, 255, 0.8);
    }
  }
`;
