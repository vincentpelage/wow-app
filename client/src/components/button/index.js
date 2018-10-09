import React from "react";
import styled from "styled-components";
import {
  getButtonStyles,
  getButtonStateBasicStyles,
  getButtonStateBannerStyles
} from "./styles";

const StyledButton = styled.button`
  ${getButtonStyles};
  ${getButtonStateBasicStyles};
`;

const StyledBannerButton = styled.button`
  ${getButtonStyles};
  ${getButtonStateBannerStyles};
`;

export const BannerButton = ({
  onClick,
  type,
  disabled,
  size,
  height,
  fullWidth,
  backgroundColor,
  color,
  children
}) => (
  <StyledBannerButton
    type={type}
    disabled={disabled}
    onClick={onClick}
    size={size}
    backgroundColor={backgroundColor}
    color={color}
    fullWidth={fullWidth}
    height={height}
  >
    {children}
  </StyledBannerButton>
);

const Button = ({
  onClick,
  type,
  disabled,
  size,
  height,
  fullWidth,
  backgroundColor,
  color,
  children
}) => (
  <StyledButton
    type={type}
    disabled={disabled}
    onClick={onClick}
    size={size}
    backgroundColor={backgroundColor}
    color={color}
    fullWidth={fullWidth}
    height={height}
  >
    {children}
  </StyledButton>
);

export default Button;
