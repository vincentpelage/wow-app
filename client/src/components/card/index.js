import React from "react";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";

const StyledCard = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${props => props.theme.light};
  padding: 20px;
  margin: 16px 16px 20px 10px;
  opacity: ${props => (props.isDone ? "0.9" : "0.5")};
  border-radius: ${global.borderRadius};
`;

export const Card = ({ isDone, children }) => (
  <StyledCard isDone={isDone}>{children}</StyledCard>
);

export default Card;
