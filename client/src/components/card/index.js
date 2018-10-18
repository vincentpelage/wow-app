import React from "react";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";
import { getOpacity } from "./styles";

const StyledCard = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${props => props.theme.light};
  padding: 20px;
  border-radius: ${global.borderRadius};
  ${getOpacity};
`;

export const Card = ({ isDone, noOpacity, children }) => (
  <StyledCard isDone={isDone} noOpacity={noOpacity}>
    {children}
  </StyledCard>
);

export default Card;
