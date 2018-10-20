import React from "react";
import styled from "styled-components";
import { global } from "../styles/theme/globalStyle";

const WrapperBanner = styled.div`
  background-image: url(${props => props.theme.image});
  width: 100%;
  height: ${props => (props.isResultActive ? "500px" : "100vh")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 0;
  transition: all 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    transition: all ease 0.3s;
    background: #3d2b3d;
  }
  @media (min-width: ${global.minTablet}) {
    height: ${props => (props.isResultActive ? "600px" : "100vh")};
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const Banner = ({ title, isResultActive, children }) => {
  return (
    <WrapperBanner isResultActive={isResultActive}>
      <Title>{title}</Title>
      {children}
    </WrapperBanner>
  );
};

export default Banner;
