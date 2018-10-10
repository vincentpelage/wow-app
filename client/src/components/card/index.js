import React from "react";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";

const StyledCard = styled.div`
  background-color: ${props => props.theme.light};
  color: #fff;
  padding: 20px;
  margin: 16px 16px 20px 10px;
  opacity: ${props => (props.isDungeonDone ? "0.9" : "0.5")};
  border-radius: ${global.borderRadius};
`;

export const Card = ({ isDungeonDone, children }) => (
  <StyledCard isDungeonDone={isDungeonDone}>{children}</StyledCard>
);

export default Card;
