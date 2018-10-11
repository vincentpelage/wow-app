import { injectGlobal } from "styled-components";
import LifeCraftFont from "../../assets/fonts/LifeCraftFont.ttf";
import Sylvanas from "../../assets/images/sylvanas.jpg";
import Anduin from "../../assets/images/anduin.jpg";

export const global = {
  borderRadius: "3px",
  maxMobile: "767px",
  minTablet: "768px",
  maxTablet: "1023px",
  minDesktop: "1024px",
  medDesktop: "1240px"
};

export const themeHorde = {
  light: "#6C0E16",
  medium: "#590612",
  dark: "#38040E",
  image: Sylvanas
};

export const themeAlliance = {
  light: "#1F2C5D",
  medium: "#1B264F",
  dark: "#131B39",
  image: Anduin
};

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
  @font-face {
    font-family: LifeCraftFont;
    src: url(${LifeCraftFont});
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  p, a, input, span {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    margin: 0;
    font-size: 12px;
    @media (min-width: ${global.minTablet}) {
      font-size: 14px;
    }
    @media (min-width: ${global.minDesktop}) {
      font-size: 16px;
    }
  }
  button {
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }
  h1 {
    font-family: LifeCraftFont, sans-serif;
    font-weight: normal;
    font-size: 45px;
    margin: 0;
    @media (min-width: ${global.minTablet}) {
      font-size: 55px;
    }
  }
  h2 {
    margin: 0;
    font-family: LifeCraftFont, sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin: 0;
    @media (min-width: ${global.minTablet}) {
      font-size: 24px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;
