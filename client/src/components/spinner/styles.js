import { css } from "styled-components";

const getSize = size => {
  switch (size) {
    case "small":
      return "16px";
    case "large":
      return "32px";
    case "xlarge":
      return "48px";
    case "inherit":
      return "inherit";
    default:
      return "24px";
  }
};

export const getSpinnerStyles = props => {
  const size = getSize(props.size);

  return css`
    display: inline-block;
    height: ${size};
    transition: all 300ms ease-in-out;
    width: ${props => (props.isLoading ? size : "0")};
    opacity: ${props => (props.isLoading ? "1" : "0")};
  `;
};
