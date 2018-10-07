import React from "react";
import styled from "styled-components";

const WrapperBanner = styled.div`
  background-image: url(${props => props.theme.image});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 0;
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
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const Banner = ({ title, children }) => {
  return (
    <WrapperBanner title={title}>
      <Title>{title}</Title>
      {children}
    </WrapperBanner>
  );
};

export default Banner;
