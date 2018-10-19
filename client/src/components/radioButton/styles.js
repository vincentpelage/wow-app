import { css } from "styled-components";

export const getRadioButtonCheckedStyles = props => {
  let backgroundColor = "transparent";
  let color = "rgba(255, 255, 255, 0.5)";

  if (props.isChecked) {
    backgroundColor = props.theme.light;
    color = "rgba(255, 255, 255, 0.9)";
  }

  return css`
    background-color: ${backgroundColor};
    color: ${color};
  `;
};
