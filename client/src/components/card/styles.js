import { css } from "styled-components";

export const getOpacity = props => {
  let opacity = "0.5";

  if (props.noOpacity) {
    opacity = "0.9";
  }

  if (props.isDone) {
    opacity = "0.9";
  }

  return css`
    opacity: ${opacity};
  `;
};
