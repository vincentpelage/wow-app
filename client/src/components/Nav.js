import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import DungeonAchievements from "../views/DungeonAchievements";
// import Home from "../views/Home";
import { global } from "../styles/theme/globalStyle";
import {
  IconDungeon,
  IconRaid,
  IconPvp,
  IconHome,
  IconFaction
} from "../assets/icons";

const Menu = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const WrapperBurger = styled.a`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 3;
  width: 40px;
  height: 24px;
  @media (min-width: ${global.minTablet}) {
    display: none;
  }
`;

const BurgerBar = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  margin: 8px 0;
  transition: 0.4s;
  &:nth-child(1) {
    transform: ${props =>
      props.isBurgerActive
        ? "rotate(-45deg) translate(-10px,7px)"
        : "#rotate(0deg) translate(0px,0px)"};
  }
  &:nth-child(2) {
    background-color: ${props =>
      props.isBurgerActive ? "transparent" : "rgba(255, 255, 255, 0.8)"};
  }
  &:nth-child(3) {
    transform: ${props =>
      props.isBurgerActive
        ? "rotate(45deg) translate(-10px,-7px)"
        : "#rotate(0deg) translate(0px,0px)"};
  }
`;

const WrapperNav = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${global.maxMobile}) {
    display: ${props => (props.isBurgerActive ? "flex" : "none")};
  }
  @media (min-width: ${global.minTablet}) {
    flex-direction: row;
    width: 75%;
    height: auto
    justify-content: center;
    align-items: stretch;
  }
  @media (min-width: ${global.minDesktop}) {
    width: 70%;
  }
  @media (min-width: ${global.medDesktop}) {
    width: 60%;
  }
`;

const MenuLink = styled(Link)`
  padding: 0;
  color: #fff;
  background: ${props => props.theme.medium};
  text-transform: uppercase;
  letter-spacing: 3px;
  white-space: nowrap;
  font-size: 12px;
  flex: 0 0 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.3s;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  svg {
    transition: all ease 0.5s;
  }
  &:hover {
    background: ${props => props.theme.light};
    svg {
      transform: rotate(360deg);
    }
  }
  @media (min-width: ${global.minTablet}) {
    letter-spacing: 2px;
    padding: 12px 18px;
    &:first-child {
      border-bottom-left-radius: ${global.borderRadius};
    }
    &:last-child {
      border-bottom-right-radius: ${global.borderRadius};
    }
    &:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.4);
      border-bottom: none;
    }
  }
  @media (min-width: ${global.minDesktop}) {
    letter-spacing: 3px;
  }
`;

const HomeLink = MenuLink.extend`
  @media (min-width: ${global.minTablet}) {
    flex-basis: auto;
  }
`;

const Name = styled.span`
  padding-top: 5px;
  opacity: 0.8;
`;

const ButtonFaction = styled.button`
  position: absolute;
  top: 0;
  left: 10%;
  background: ${props => props.theme.dark};
  border: none;
  padding: 16.5px 12px;
  border-bottom-left-radius: ${global.borderRadius};
  border-bottom-right-radius: ${global.borderRadius};
  z-index: 1;
  cursor: pointer;
  transition: all ease 0.3s;
  svg {
    transition: all ease 0.5s;
  }
  &:hover {
    background: ${props => props.theme.medium};
    svg {
      transform: rotate(360deg);
    }
  }
  &:active,
  &:focus {
    box-shadow: none;
    outline: none;
  }
  @media (min-width: ${global.minTablet}) {
    right: 1.75%;
    left: inherit;
    padding: 20.5px 19px;
  }
  @media (min-width: ${global.minDesktop}) {
    right: 5%;
  }
  @media (min-width: ${global.medDesktop}) {
    right: 10%;
  }
`;

class Nav extends Component {
  state = {
    isBurgerActive: false
  };

  toggleMenu = () => {
    this.setState({ isBurgerActive: !this.state.isBurgerActive });
  };

  render() {
    const { toggleTheme } = this.props;
    const { isBurgerActive } = this.state;

    return (
      <Menu>
        <WrapperBurger onClick={this.toggleMenu}>
          <BurgerBar isBurgerActive={isBurgerActive} />
          <BurgerBar isBurgerActive={isBurgerActive} />
          <BurgerBar isBurgerActive={isBurgerActive} />
        </WrapperBurger>
        <WrapperNav isBurgerActive={isBurgerActive}>
          <HomeLink to="/">
            <IconHome />
            <Name>Accueil</Name>
          </HomeLink>
          <MenuLink to="/hauts-faits-donjon">
            <IconDungeon />
            <Name>Hauts-faits donjon</Name>
          </MenuLink>
          <MenuLink to="/hauts-faits-raids">
            <IconRaid />
            <Name>Hauts-faits raid</Name>
          </MenuLink>
          <MenuLink to="/hauts-faits-pvp">
            <IconPvp />
            <Name>Hauts-faits PVP</Name>
          </MenuLink>
        </WrapperNav>
        <ButtonFaction onClick={toggleTheme}>
          <IconFaction />
        </ButtonFaction>
      </Menu>
    );
  }
}

export default Nav;