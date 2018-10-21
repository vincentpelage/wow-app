import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Orc from "../assets/images/404-opt.jpg";
import { BannerButton } from "../components/button/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Orc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    transition: all ease 0.3s;
    background: #3d2b3d;
  }
`;

const Title = styled.h1`
  color: white;
  z-index: 1;
  margin-bottom: 16px;
  text-align: center;
`;

const WrapperButton = styled(Link)`
  z-index: 1;
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>this page doesn't exist !</Title>
      <WrapperButton exact to="/">
        <BannerButton size="large">Go back before it's too late</BannerButton>
      </WrapperButton>
    </Wrapper>
  );
};

export default NotFound;
