import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="header">
      <Logo
        img={
          "https://www.pinclipart.com/picdir/big/538-5382316_star-wars-the-force-awakens-logo-png-star.png"
        }
      ></Logo>
    </div>
  );
};

export default Header;

const Logo = styled("div")(({ img }) => ({
  display: "flex",
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "500px",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "250px",
}));
