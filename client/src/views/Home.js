import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HordeIcon from "../assets/images/horde.png";
import Sylvanas from "../assets/images/sylvanas.jpg";
import AllianceIcon from "../assets/images/alliance.png";
import Anduin from "../assets/images/anduin.jpg";
import { themeHorde, themeAlliance, global } from "../styles/theme/globalStyle";
import { faction } from "../App.js";

const WrapperHome = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Visuel = styled(Link)`
  position: relative;
  display: block;
  flex-basis: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease-in-out;
  z-index: 0;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    transition: all ease 0.3s;
  }
  &:hover {
    flex-basis: 95%;
  }
`;

const Horde = Visuel.extend`
  background-image: url(${Sylvanas});
  border: 5px solid ${themeHorde.medium};

  &::after {
    background: ${themeHorde.medium};
  }
  & > div {
    background: ${themeHorde.medium};
    transition: all 0.3s ease;
  }
  &:hover {
    &::after {
      opacity: 0.1;
    }
    & > div {
      left: 0;
    }
  }
`;

const Alliance = Visuel.extend`
  background-image: url(${Anduin});
  border: 5px solid ${themeAlliance.medium};
  &::after {
    background: ${themeAlliance.medium};
  }
  & > div {
    background: ${themeAlliance.medium};
    transition: all 0.3s ease;
  }
  &:hover {
    &::after {
      opacity: 0.3;
    }
    & > div {
      right: 0;
    }
  }
`;

const Banner = styled.div`
  display: inline-flex;
  align-items: center;
  position: absolute;
  bottom: 10%;
  z-index: 1;
`;

const HordeBanner = Banner.extend`
  left: -223px;
  border-top-right-radius: ${global.borderRadius};
  border-bottom-right-radius: ${global.borderRadius};
`;

const AllianceBanner = Banner.extend`
  right: -253px;
  border-top-left-radius: ${global.borderRadius};
  border-bottom-left-radius: ${global.borderRadius};
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
`;

const Title = styled.p`
  color: #fff;
  font-family: LifeCraftFont;
  font-size: 40px;
  text-transform: lowercase;
  padding: 10px 10px 6px 10px;
`;

const Home = ({ selectTheme }) => {
  return (
    <WrapperHome>
      <Horde
        to="/hauts-faits-donjon"
        onClick={() => selectTheme(faction.horde)}
      >
        <HordeBanner>
          <Title>For the Horde</Title>
          <Icon src={HordeIcon} />
        </HordeBanner>
      </Horde>
      <Alliance
        to="/hauts-faits-donjon"
        onClick={() => selectTheme(faction.alliance)}
      >
        <AllianceBanner>
          <Icon src={AllianceIcon} />
          <Title>For the Alliance</Title>
        </AllianceBanner>
      </Alliance>
    </WrapperHome>
  );
};

export default Home;
