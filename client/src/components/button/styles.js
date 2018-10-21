import { css } from "styled-components";
import { global } from "../../styles/theme/globalStyle";

const getSizing = (size = "medium") => {
  switch (size) {
    case "small":
      return "12";
    case "large":
      return "16";
    case "xlarge":
      return "20";
    default:
      return "14";
  }
};

export const getButtonStyles = props => {
  let background = props.theme.dark;
  let color = "#fff";
  let cursor = "pointer";
  let width = "";
  let height = "2.5em";
  const size = getSizing(props.size);
  const tabletSize = size - 2;
  const mobileSize = size - 4;

  if (props.backgroundColor) {
    background = props.backgroundColor;
  }

  if (props.color) {
    color = props.color;
  }

  if (props.disabled) {
    cursor = "default";
  }

  if (props.fullWidth) {
    width = "100%";
  }

  if (props.height) {
    height = props.height;
  }

  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5em;
    width: ${width};
    max-width: 100%;
    padding: 6px 12px;
    border: ${props.theme.dark} solid 2px;
    border-radius: ${global.borderRadius};
    background: ${background};
    color: ${color};
    font-size: ${mobileSize}px;
    cursor: ${cursor};
    text-decoration: none;
    transition: all 200ms ease-in-out;
    outline: none;
    @media (min-width: ${global.minTablet}) {
      font-size: ${tabletSize}px;
      height: ${height};
    }
    @media (min-width: ${global.minDesktop}) {
      font-size: ${size}px;
    }
  `;
};

// Hover, Active and Focus styles for standard button
export const getButtonStateBasicStyles = props => {
  let background = props.theme.dark;
  let backgroundHover = props.theme.light;

  if (props.backgroundColor) {
    background = props.backgroundColor;
  }

  return css`
    &:active {
      background: ${backgroundHover};
      border: ${backgroundHover} solid 2px;
    }
    &:hover {
      background: ${backgroundHover};
      border: ${backgroundHover} solid 2px;
    }
    &:focus {
      outline: none;
      background: ${background};
      border: ${background} solid 2px;
    }
  `;
};

// Hover, Active and Focus styles for Banner button
export const getButtonStateBannerStyles = props => {
  return css`
    border: none;
    background: ${props.theme.light};
    color: #fff;
    box-shadow: 0 4px ${props.theme.dark};
    transition: none;
    letter-spacing: 1px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      transition: all 0.3s;
    }
    &:hover {
      box-shadow: 0 6px ${props.theme.dark};
      top: -2px;
    }
    &:active {
      box-shadow: 0 0 ${props.theme.dark};
      top: 4px;
    }
  `;
};
