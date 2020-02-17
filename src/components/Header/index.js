import React from "react";
import { Container } from "./styles";
import { Logo } from "../Images/Logo";
// import logo, { ReactComponent as TripPlannerLogo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;
