import { injectGlobal } from "styled-components";
import LifeCraftFont from "../../assets/fonts/LifeCraftFont.ttf";
import Sylvanas from "../../assets/images/sylvanas.jpg";
import Anduin from "../../assets/images/anduin.jpg";

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
  p, a {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    margin: 0;
  }
  h1 {
    font-family: LifeCraftFont, sans-serif;
    font-weight: normal;
    font-size: 55px;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

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

export const global = {
  borderRadius: "6px",
  maxMobile: "767px",
  minTablet: "768px",
  maxTablet: "1023px",
  minDesktop: "1024px",
  medDesktop: "1240px"
};
